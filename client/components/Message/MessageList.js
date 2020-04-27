import React from "react";

import { StyleSheet, ScrollView, View } from "react-native";
import { Message } from "./Message";

export class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        // TEST MESSAGES
        { text: "mdwdkma;klsmk;dmk;asmdk;asmdk;msak;dmsk;adm;ksamd;ksamdkmsakd;msadksamd;samdk;samkd;smads;dmsa;d", clientId: "1" },
        { text: "mskdmk;lsamd;ksamdksamdksamd;k", clientId: "1" },
        { text: "mldkmsa;ldmsakdms;alkmd;samd;lsamd;lsamd;lmsal;dmsl;amdl;samdl;sa", clientId: "1" },
        { text: "sm;dl;samd;lmsal;dmls;amd;lsamdl;asm;ldmas;ldmsal;dmsal;dml;asmdlas;mdl;asmdl;smadl;saml;dmsaldmsal;dmsla;md;lsamdlsamdl;samdl;samdl;samdlsamdlsamd;lsa", clientId: "1" },
        { text: "K", clientId: "1" },
        { text: "d;l,sa;ldm,sl;adl;sam", clientId: "1" },
        { text: "dmsdksmd;samdk;sma;dmsa;ldm;asmd;lsamdl;samdl;samdlad;sa", clientId: "1" },
        { text: "lds;mdl;smal;dmsaldml;samdl;smadl;samldm", clientId: "1" },
        { text: "dasmdksmads", clientId: "1" },
        { text: ",'dsl,dl;a,d;ls,dl;masdklmsakdmskadmksamks;adska;dms;adk;asd", clientId: "1" }
      ],
      messageToSend: ""
    };
  }

  componentDidMount() {
    // this.props.socket.on("UpdateClientMessageList", msg => {
    //   console.log(msg);
    //   this.setState({
    //     messages: [...this.state.messages, msg]
    //   });
    // });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        height: "70%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
      }
    });

    // Map message list to message component
    const messagesToDisplay = this.state.messages.map(message => (
      <Message message={message}> </Message>
    ));

    return (
      <ScrollView style={styles.container}>
        <View>{messagesToDisplay}
        </View>
      </ScrollView>
    );
  }
}
