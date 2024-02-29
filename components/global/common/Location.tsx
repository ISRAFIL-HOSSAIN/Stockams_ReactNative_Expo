import React, { FC, useState, useEffect, useCallback } from "react";
import { Text, View, PermissionsAndroid, Platform } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Geolocation from "react-native-geolocation-service";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

interface LocationProps {
  values: any;
  onLocationChange: (newLocation: string) => void;
}

const Location: FC<LocationProps> = ({
  values,
  onLocationChange,
}) => {
  const [currentLocation, setCurrentLocation] =
    useState<Geolocation.GeoPosition | null>(null);
  const [hasLocationPermission, setHasLocationPermission] =
    useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const checkPermissions = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        setHasLocationPermission(
          granted === PermissionsAndroid.RESULTS.GRANTED
        );
      } else {
        setHasLocationPermission(true); // Assume granted for iOS
      }
    };

    checkPermissions();
  }, []);

  const requestLocation = useCallback(async () => {
    try {
      const position = await Geolocation?.getCurrentPosition(
        (pos) => {
          setCurrentLocation(pos);
        },
        (error) => {
          setError(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      console.log({ position });
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    if (hasLocationPermission) {
      requestLocation();
    }
  }, [hasLocationPermission, requestLocation]);

  const handleLocationSelection = (data: any, details: any) => {
    // setFieldValue("location", data.description); // Update the field here
    onLocationChange(data?.description); // Call the onLocationChange callback
    console.log(data);
    console.log(details);
  };

  return (
    <View className="h-full ">
      <View className=" px-2  w-[320px] h-full">
        <GooglePlacesAutocomplete
          placeholder="Search Location"
          minLength={2}
          onFail={(err) => console.error(err)}
          fetchDetails={true}
          listViewDisplayed={false}
          keepResultsAfterBlur={true}
          onPress={(data, details = null) =>{
            console.log
            handleLocationSelection(data, details)
          }  
          } // Corrected onPress prop
          query={{
            key: "AIzaSyDHoL8v4KmgOnN0ZQ9L8jR93EbhzS1u-Us", // Replace with your API key
            language: "en",
          }}
          styles={{
            textInputContainer: {
              backgroundColor: "white",
              marginBottom: 5,
            },
            textInput: {
              height: 38,
              color: "#3A3A3A",
              fontSize: 16,
              borderRadius: 10,
            },
            predefinedPlacesDescription: {
              color: "#1faadb",
            },
          }}
        />
      </View>

      {/* <View className="h-full">
          <MapView
            style={{
              width: "100%",
              height: "100%",
              marginTop: 10,
              borderRadius: 10,
            }}
            provider={PROVIDER_GOOGLE}
            region={{
              latitude: 24.842865,
              longitude: 67.044405,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            <Marker
              coordinate={{
                latitude: 24.759833,
                longitude: 67.079526,
              }}
            ></Marker>
          </MapView>
        </View> */}
    </View>
  );
};

export default Location;
