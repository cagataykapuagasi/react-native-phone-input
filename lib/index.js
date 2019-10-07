import React, { Component } from "react";
import { Image, TextInput, TouchableWithoutFeedback, View } from "react-native";
import PropTypes from "prop-types";
import Country from "./country";
import Flags from "./resources/flags";
import PhoneNumber from "./phoneNumber";
import styles from "./styles";
import CountryPicker from "./countryPicker";


const countryData = PhoneNumber.getCountryDataByCode(initialCountry);


const getAllCountries = () => {
  return PhoneNumber.getAllCountries();
}

const getFlag = (iso2) => {
  return Flags.get(iso2);
}

export { getAllCountries, getFlag };
