import React from "react";

import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

import { TUser } from "@types";

interface IProps {
  children?: React.ReactNode;
  user: TUser;
}

const User: React.FC<IProps> = ({ user }) => {
  const { id, name, username, email, address, phone, website, company } = user;
  const { street, suite, city, zipcode, geo } = address;

  return (
    <Box bg="#437276" maxH="auto" padding="3">
      <Text fontSize="sm">name: {name}</Text>
      <Text fontSize="sm">username: {username}</Text>
      <Text fontSize="sm">email: {email}</Text>
      <Text fontSize="sm">address:</Text>
      <UnorderedList fontSize="sm">
        <ListItem fontSize="sm">street: {street}</ListItem>
        <ListItem fontSize="sm">suite: {suite}</ListItem>
        <ListItem fontSize="sm">city: {city}</ListItem>
        <ListItem fontSize="sm">zipcode: {zipcode}</ListItem>
        <Text fontSize="sm">geo:</Text>
        <UnorderedList fontSize="sm">
          <ListItem fontSize="sm">lat: {geo.lat}</ListItem>
          <ListItem fontSize="sm">lng: {geo.lng}</ListItem>
        </UnorderedList>
      </UnorderedList>
      <Text fontSize="sm">phone: {phone}</Text>
      <Text fontSize="sm">website: {website}</Text>
      <Text fontSize="sm">company:</Text>
      <UnorderedList fontSize="sm">
        <ListItem fontSize="sm">name: {company.name}</ListItem>
        <ListItem fontSize="sm">catchPhrase: {company.catchPhrase}</ListItem>
        <ListItem fontSize="sm">bs: {company.bs}</ListItem>
      </UnorderedList>
    </Box>
  );
};

export { User };
