import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState, FC } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';// Replace 'your-icon-library' with the actual library you're using for icons

interface SearchBarProps {
  onSearch: (query: string) => void;
  text:string;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch, text }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleChangeText = (newText: string) => {
    setSearchQuery(newText);
    onSearch(newText);
  };

  return (
    <View className='flex flex-row items-center justify-between w-[360px] h-[50px] bg-[#ffffff] self-center rounded-xl p-2 shadow-xl shadow-slate-500'>
    <EvilIcons name="search" size={25} color="#ABB0B6" />
      <TextInput className='text-[13px] right-[95px] mt-[3px]'
        placeholder={text}
        value={searchQuery}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity className='' onPress={() => setSearchQuery('')}>
        <MaterialIcons name="clear" size={20} color="#ABB0B6" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
