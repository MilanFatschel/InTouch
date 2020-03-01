import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import Amplify from "@aws-amplify/core";
import config from "../../../aws-exports";
Amplify.configure(config);
import API, { graphqlOperation } from "@aws-amplify/api";

import Mutations from "./../../../graphql/mutations";
import Queries from "./../../../graphql/queries";

class GroupChat extends React.Component {
  state = { name: "" };
}
