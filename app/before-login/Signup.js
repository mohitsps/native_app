import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {checkEmail} from '../utill/utill';
import {connect} from 'react-redux';
import {hitSignupApi} from '../redux/action/login';
import ProgressBar from '../utill/ProgressBar';
import * as NavigationService from '../../app/redux/navigationService';
import {storeData} from '../service/Storage';

const mArray = [
  '0300',
  '0301',
  '0302',
  '0303',
  '0304',
  '0305',
  '0306',
  '0307',
  '0308',
  '0309',
  '0310',
  '0312',
  '0313',
  '0314',
  '0315',
  '0316',
  '0317',
  '0318',
  '0319',
  '0320',
  '0321',
  '0322',
  '0323',
  '0324',
  '0325',
  '0326',
  '0327',
  '0328',
  '0329',
  '0330',
  '0331',
  '0332',
  '0333',
  '0334',
  '0335',
  '0336',
  '0337',
  '0338',
  '0339',
  '0340',
  '0341',
  '0342',
  '0343',
  '0344',
  '0345',
  '0346',
  '0347',
  '0348',
  '0349',
  '0350',
  '0351',
  '0352',
  '0353',
  '0354',
  '0355',
  '0356',
  '0357',
  '0358',
  '0359',
  '0360',
  '0361',
  '0363',
  '0364',
];

const SignUp = props => {
  const [hide, setHide] = useState(true);
  const [conHide, setconHide] = useState(true);
  const navigation = useNavigation();
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPass, setConPass] = useState('');
  const [mobileError, setMobileError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [conPassError, setConPassError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('This field is required');
  const [emailMsg, setEmailMsg] = useState('This field is required');

  const signUp = () => {
    if (mobile == '' && email == '' && password == '' && conPass == '') {
      setMobileError(true);
      setEmailError(true);
      setPassError(true);
      setConPassError(true);
    } else if (mobile == '') {
      setMobileError(true);
      setErrorMsg('Please enter mobile number');
    } else if (mobile.length != 11) {
      setMobileError(true);
      setErrorMsg('Please enter valid mobile number');
    } else if (!mArray.includes(mobile.substring(0, 4))) {
      console.log('--->', 3);
      setMobileError(true);
      setErrorMsg('Please enter valid mobile number');
    } else if (email == '') {
      setEmailMsg('This field is required');
      setEmailError(true);
    } else if (checkEmail(email) == false) {
      setEmailError(true);
      setEmailMsg('Please enter valid email Id');
    } else if (password == '') {
      setPassError(true);
    } else if (conPass == '') {
      setConPassError(true);
    } else if (password != conPass) {
      Toast.show('Password and confirm password did not match');
    } else {
      let formdata = new FormData();
      formdata.append('password', password);
      formdata.append('mobile_number', parseInt(mobile));
      formdata.append('email', email);
      storeData('EMAIL', email);
      props.hitSignupApi(formdata);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flexGrow: 1, height: '100%'}}
      behavior={Platform.OS == 'android' ? 'height' : 'padding'}
      enabled>
      <ScrollView contentContainerStyle={{paddingBottom: hp('5%')}}>
        <View
          style={{
            width: '88%',
            marginHorizontal: '6%',
            backgroundColor: '#F4F4F4',
          }}>
          <ProgressBar hide={!props.hideProgress} />
          <Text style={LocalStyle.Title_Label}>Welcome to Channab</Text>
          <Text style={LocalStyle.Login_Continue}>Sign up get to started!</Text>
          <View style={LocalStyle.Edit_Container}>
            <TextInput
              style={{
                width: '90%',
                marginHorizontal: '5%',
                height: '100%',
                color: '#000',
              }}
              placeholder={'Mobile Number'}
              returnKeyType="next"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              blurOnSubmit={false}
              placeholderTextColor={'gray'}
              autoCapitalize={false}
              autoCorrect={false}
              autoFocus={false}
              keyboardType={'number-pad'}
              value={mobile}
              onChangeText={txt => {
                setMobile(txt);
                setMobileError(false);
              }}
            />
          </View>
          {mobileError == true && (
            <Text
              style={{
                marginTop: hp('.5%'),
                fontSize: hp('1.5%'),
                marginLeft: wp('3%'),
                color: 'red',
              }}>
              {errorMsg}
            </Text>
          )}
          <View style={LocalStyle.Edit_Container}>
            <TextInput
              style={{
                width: '90%',
                marginHorizontal: '5%',
                height: '100%',
                color: '#000',
              }}
              placeholder={'Email'}
              keyboardType={'email-address'}
              returnKeyType="next"
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => {
                this.third.focus();
              }}
              blurOnSubmit={false}
              placeholderTextColor={'gray'}
              autoCapitalize={false}
              autoCorrect={false}
              autoFocus={false}
              value={email}
              onChangeText={txt => {
                setEmail(txt);
                setEmailError(false);
              }}
            />
          </View>
          {emailError == true && (
            <Text
              style={{
                marginTop: hp('.5%'),
                fontSize: hp('1.5%'),
                marginLeft: wp('3%'),
                color: 'red',
              }}>
              {emailMsg}
            </Text>
          )}
          <View style={[LocalStyle.Edit_Container, {flexDirection: 'row'}]}>
            <TextInput
              style={{
                width: '80%',
                marginHorizontal: '5%',
                height: '100%',
                color: '#000',
              }}
              placeholder={'Password'}
              returnKeyType="done"
              ref={input => {
                this.third = input;
              }}
              onSubmitEditing={() => {
                this.fourth.focus();
              }}
              secureTextEntry={hide}
              placeholderTextColor={'gray'}
              autoCapitalize={false}
              autoCorrect={false}
              autoFocus={false}
              value={password}
              onChangeText={txt => {
                setPassword(txt);
                setPassError(false);
              }}
            />
            <TouchableOpacity
              onPress={() => setHide(!hide)}
              style={{width: '10%', alignSelf: 'center'}}>
              <Ionicons
                name={hide == true ? 'eye-off-outline' : 'eye-outline'}
                color="#24931A"
                size={hp('3%')}
              />
            </TouchableOpacity>
          </View>
          {passError == true && (
            <Text
              style={{
                marginTop: hp('.5%'),
                fontSize: hp('1.5%'),
                marginLeft: wp('3%'),
                color: 'red',
              }}>
              This field is required
            </Text>
          )}
          <View style={[LocalStyle.Edit_Container, {flexDirection: 'row'}]}>
            <TextInput
              style={{
                width: '80%',
                marginHorizontal: '5%',
                height: '100%',
                color: '#000',
              }}
              placeholder={'Confirm Password'}
              returnKeyType="done"
              ref={input => {
                this.fourth = input;
              }}
              secureTextEntry={conHide}
              placeholderTextColor={'gray'}
              autoCapitalize={false}
              autoCorrect={false}
              autoFocus={false}
              value={conPass}
              onChangeText={txt => {
                setConPass(txt);
                setConPassError(false);
              }}
            />
            <TouchableOpacity
              onPress={() => setconHide(!conHide)}
              style={{width: '10%', alignSelf: 'center'}}>
              <Ionicons
                name={conHide == true ? 'eye-off-outline' : 'eye-outline'}
                color="#24931A"
                size={hp('3%')}
              />
            </TouchableOpacity>
          </View>
          {conPassError == true && (
            <Text
              style={{
                marginTop: hp('.5%'),
                fontSize: hp('1.5%'),
                marginLeft: wp('3%'),
                color: 'red',
              }}>
              This field is required
            </Text>
          )}
          <TouchableOpacity
            style={LocalStyle.Login_Button}
            onPress={() => signUp()}>
            <Text style={LocalStyle.Login_Label}>Sign up</Text>
          </TouchableOpacity>
          <Text style={LocalStyle.Or_Label}>Or</Text>
          <TouchableOpacity
            style={LocalStyle.Signup_Button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={LocalStyle.Login_Label}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const LocalStyle = StyleSheet.create({
  Title_Label: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: hp('15%'),
    color: '#24931A',
  },
  Login_Continue: {
    fontSize: hp('2%'),
    alignSelf: 'center',
    marginVertical: hp('1%'),
    color: '#8A8A8A',
  },
  Edit_Container: {
    width: '100%',
    height: hp('7%'),
    backgroundColor: '#FFF',
    borderRadius: hp('3%'),
    marginTop: hp('3%'),
  },
  Login_Button: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: '#24931A',
    borderRadius: hp('3%'),
    marginTop: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Signup_Button: {
    width: '100%',
    height: hp('6%'),
    backgroundColor: '#C4C4C4',
    borderRadius: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Login_Label: {
    fontSize: hp('2.5%'),
    color: '#FFF',
    fontWeight: 'bold',
  },
  Or_Label: {
    fontSize: hp('2%'),
    alignSelf: 'center',
    marginVertical: hp('1%'),
    color: '#24931A',
  },
  Forgot_Password: {
    fontSize: hp('1.5%'),
    color: '#24931A',
    marginLeft: wp('4%'),
    marginTop: hp('1%'),
  },
});
function mapToState(state) {
  const {hideProgress} = state.loginReducer;
  return {hideProgress};
}
export default connect(mapToState, {hitSignupApi})(SignUp);
