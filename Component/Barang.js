import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Barang extends Component{
  constructor(props){
    super(props);
    this.state = {
      jumlah: 0
    }
  }

  tambahJumlah = () => {
    this.setState({jumlah: this.state.jumlah + 1});
  }

  kurangJumlah = () => {
    if(this.state.jumlah > 0){
      this.setState({jumlah: this.state.jumlah - 1});
    }else{
      alert("Jumlah Tidak Boleh Kurang Dari 0");
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.lblJumlah}>Jumlah : {this.state.jumlah}</Text>
        <Text style={styles.label}>Silahkan Tekan Tombol Di Bawah</Text>
        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.tambahan} onPress={this.tambahJumlah}>
            <Text style={styles.textBtn}> + </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kurangan} onPress={this.kurangJumlah}>
            <Text style={styles.textBtn}> - </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.jumlah}>{this.state.jumlah}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    padding: 20
  },
  containerBtn: {
    flexDirection: 'row',
  },
  tambahan: {
    backgroundColor: 'green',
    flex: 1,
    textAlign: 'center',
    width: 20,
    height: 30,
    padding: 5,
    margin: 20
  },
  kurangan: {
    backgroundColor: 'red',
    flex: 1,
    width: 20,
    height: 30,
    padding: 5,
    margin: 20
  },
  jumlah: {
    fontSize: 50,
    color: 'blue',
    textAlign: 'center'
  },
  lblJumlah: {
    textAlign: 'right'
  },
  label: {
    fontSize: 20,
    textAlign: 'center'
  },
  textBtn: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
  }
})

export default Barang;
