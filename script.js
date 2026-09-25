(function(){

// ni idea de qué es todo este chorizo de números, es el dibujo del cerebro.
// NO TOCAR que se rompe. lo que sí se toca es PUNTOS, más abajo.
const MALLA = [
  '277.9,22.9,1.4,2E51FF;307.0,30.5,1.1,1B52FF;426.4,35.6,1.1,1875FF;297.0,36.8,1.1,2B58FF',
  '376.5,42.7,1.8,0C71FF;384.4,41.7,1.8,2598FF;272.1,43.6,2.9,3F68FF;326.8,43.4,1.1,245EFF',
  '319.5,50.0,1.7,2370FF;262.5,62.5,3.6,495CFF;403.0,53.3,1.4,1272FF;271.2,53.6,1.1,224EFF',
  '311.4,57.8,4.1,4BB9FF;347.4,54.3,1.2,1458FF;214.0,64.5,1.1,3F2CFF;272.0,64.0,1.1,2B4CFF',
  '317.0,68.0,1.6,2153FF;448.0,67.2,1.1,0C90FF;456.5,76.0,1.8,12A3FF;388.6,77.7,3.3,29A1FF',
  '426.0,77.5,1.1,0985FF;427.1,87.4,3.4,39D7FF;151.0,85.5,2.4,9338FF;482.4,103.8,5.8,26D0FF',
  '166.0,86.7,2.8,B689FF;135.3,84.9,1.2,582FFF;214.7,87.3,1.2,4322FF;308.2,87.9,1.8,3140FF',
  '201.8,88.0,1.3,6022FF;296.0,89.5,1.3,2844FF;375.8,95.3,1.1,1A67FF;492.5,96.0,1.1,14ADFF',
  '373.4,98.8,1.1,1A64FF;456.6,98.4,1.1,1D9EFF;460.9,100.7,1.2,1295FF;143.2,106.4,1.1,4914FF',
  '152.0,111.5,1.4,4619FF;470.8,117.1,2.2,129EFF;86.0,119.0,1.2,5C33FF;500.0,118.5,1.1,0D9AFF',
  '319.0,119.5,1.3,3147FF;167.0,125.5,1.4,6710FF;438.1,127.8,4.5,31D9FF;210.2,124.4,1.1,4E13FF',
  '510.5,124.5,1.1,0AB8FF;80.5,130.0,1.4,642BFF;497.8,139.1,5.0,44D9FF;520.5,129.5,1.6,0D9FFF',
  '221.5,133.0,1.1,6023FF;174.8,134.2,1.1,6C19FF;146.6,137.4,1.1,4D0FFF;428.1,143.0,2.6,2073FF',
  '162.6,141.4,1.2,4F12FF;428.3,198.9,12.2,3CA1FF;91.6,142.6,1.1,6715FF;167.0,142.8,1.1,5E1CFF',
  '293.6,148.4,3.3,5A6CFF;466.1,155.4,4.3,31BFFF;204.8,165.6,6.8,8768FF;102.5,158.0,1.6,6217FF',
  '59.7,168.5,2.5,5823FF;92.4,162.8,2.1,610DFF;99.4,164.8,1.3,710DFF;532.5,164.0,1.1,0FAEFF',
  '536.0,171.1,3.7,42F3FF;97.5,169.5,1.1,730DFF;565.9,178.6,2.5,02E9FF;237.8,183.3,2.4,6934FF',
  '349.9,186.1,2.7,2C69FF;57.3,187.3,1.4,5120FF;532.3,221.1,8.7,28EAFF;189.3,189.4,1.4,6015FF',
  '490.0,192.1,2.7,28D4FF;326.0,191.2,1.8,4755FF;114.0,191.5,1.1,7505FF;111.0,193.5,1.1,730DFF',
  '216.2,194.1,1.7,4825FF;318.0,193.5,1.3,4143FF;224.5,195.0,1.1,552AFF;311.0,195.5,1.3,403EFF',
  '496.3,201.8,2.4,0E9BFF;38.1,202.8,2.0,650BFF;83.0,200.0,1.2,801BFF;101.1,200.4,1.9,7D0AFF',
  '512.2,201.0,1.4,0BADFF;216.9,201.9,1.3,411DFF;93.0,206.0,1.5,7F02FF;88.0,209.5,1.1,8104FF',
  '516.0,217.5,1.1,0CB0FF;104.0,221.5,1.1,640FFF;517.0,221.5,1.1,08B5FF;362.3,242.6,6.0,539BFF',
  '65.0,230.5,1.1,7509FF;135.0,233.6,3.0,7118FF;576.2,249.4,3.6,08CAFF;528.0,242.5,1.1,039FFF',
  '506.0,245.5,1.1,1AA2FF;62.5,250.5,1.1,6F00FF;120.9,252.7,1.8,6C0BFF;312.8,252.9,2.0,3555FF',
  '254.7,256.0,2.9,5856FF;287.0,254.5,1.1,452FFF;581.3,259.0,2.9,22E6FF;146.0,257.0,1.2,7D0EFF',
  '59.6,258.6,1.1,7901FF;117.1,263.6,1.7,6C0DFF;137.7,262.8,1.8,7C0DFF;77.8,261.8,1.1,6E11FF',
  '395.9,262.9,1.7,235AFF;569.0,263.8,2.7,16D5FF;58.4,266.1,1.6,810EFF;76.2,271.1,2.2,790DFF',
  '115.0,270.5,1.1,6206FF;461.0,270.0,1.2,2F8CFF;141.5,271.0,1.1,531EFF;157.2,286.9,5.9,7F59FF',
  '505.0,272.5,1.4,0E8DFF;55.1,273.7,2.1,680EFF;271.1,273.0,1.7,3339FF;317.0,272.5,1.1,2939FF',
  '560.5,276.0,1.1,0CA8FF;412.4,279.6,1.7,1260FF;557.1,281.0,1.3,0AA5FF;499.1,291.1,5.0,48D2FF',
  '418.1,290.7,6.1,5BAAFF;65.0,284.5,1.1,6205FF;445.0,288.0,1.1,1F69FF;78.4,295.3,2.8,860CFF',
  '71.5,293.0,1.1,7A07FF;373.5,300.4,4.5,6AB0FF;574.1,294.6,1.8,099FFF;547.5,296.0,1.1,0A98FF',
  '545.5,299.0,1.1,14A2FF;68.0,299.5,1.1,791BFF;150.2,304.8,2.9,5212FF;541.9,306.0,4.1,42E2FF',
  '85.4,306.9,3.2,A72CFF;109.7,304.4,1.2,8706FF;125.8,313.4,3.7,6D0AFF;577.8,312.8,2.4,12ABFF',
  '96.5,310.0,1.1,650FFF;102.5,311.0,1.1,6D07FF;276.9,314.7,1.6,3F38FF;329.5,311.5,1.1,4D59FF',
  '232.5,316.0,1.1,462AFF;150.5,321.1,2.0,4D19FF;316.7,331.3,6.5,6476FF;122.7,321.4,2.0,630EFF',
  '554.6,330.8,5.7,2DC9FF;557.0,322.0,1.2,01A1FF;416.9,329.2,1.7,296DFF;251.6,332.9,1.3,293DFF',
  '494.2,335.2,1.1,1B84FF;485.5,351.7,9.1,46A8FF;486.6,340.1,1.6,1F67FF;336.4,341.0,2.2,3A4BFF',
  '227.0,341.5,1.1,2829FF;352.5,343.4,2.5,2A53FF;390.1,344.6,1.5,1954FF;559.8,344.2,1.1,059CFF',
  '381.9,347.1,1.2,174CFF;401.0,348.8,1.1,1661FF;226.1,353.8,2.5,2C30FF;232.2,357.8,1.1,222CFF',
  '503.3,359.8,1.1,085CFF;509.0,365.0,1.4,045AFF;227.0,365.5,1.1,3143FF;491.2,372.0,1.1,1071FF',
  '523.4,373.2,1.1,0C6FFF;244.0,374.5,1.1,3337FF;278.5,375.7,1.5,303BFF;497.0,375.5,1.1,1F7CFF',
  '498.6,383.6,4.4,47B2FF;258.5,379.0,1.1,2333FF;388.6,383.3,1.4,1341FF;398.0,389.5,1.1,184FFF',
  '476.5,393.6,1.3,105BFF;532.0,402.6,5.4,5AD1FF;360.7,401.9,1.4,2954FF;448.1,411.4,5.0,499BFF',
  '477.2,403.8,1.1,106AFF;354.5,404.5,1.1,2664FF;320.0,406.5,1.1,3255FF;326.1,412.6,1.7,1539FF',
  '485.1,424.4,4.9,62C8FF;404.6,414.4,1.4,215AFF;432.4,415.1,1.4,1F53FF;332.1,417.0,1.4,1A3EFF',
  '456.8,416.7,1.1,2268FF;345.0,421.5,1.1,0F40FF;451.1,421.8,1.6,1356FF;460.1,435.6,3.6,4099FF',
  '310.0,431.5,1.3,254AFF;407.2,438.8,1.1,0B4DFF;444.0,441.5,1.1,155CFF;366.9,449.8,2.4,0F51FF',
  '343.7,454.7,2.7,124BFF;371.7,456.4,2.2,1346FF;352.5,455.5,1.1,1B58FF;397.0,456.0,1.1,195CFF',
  '344.0,477.0,1.1,1054FF;346.7,488.5,1.1,094FFF;357.4,513.7,3.1,1873FF;364.5,508.0,1.1,1767FF',
  '366.4,513.6,1.3,0E67FF;372.8,546.2,1.1,1657FF'
].join(';');
const ATADURAS = [
  '0,1,0.51;0,3,0.29;0,6,0.60;0,14,0.39;1,3,0.58;1,4,0.28;1,5,0.29;1,7,0.54;1,8,0.34;2,5,0.57',
  '2,10,0.70;2,17,0.81;2,20,0.47;2,31,0.34;3,6,0.55;3,8,0.30;3,11,0.40;3,12,0.44;4,5,1.00',
  '4,7,0.28;4,13,0.38;4,19,0.27;5,10,0.55;5,19,0.27;6,9,1.00;6,11,0.79;6,14,0.65;7,8,0.74',
  '7,13,0.45;8,12,1.00;8,13,0.37;8,16,0.98;9,11,0.95;9,14,0.36;9,15,0.83;9,26,0.31;9,29,0.25',
  '9,48,0.50;10,19,0.62;10,20,0.50;11,12,0.45;11,15,0.48;12,15,0.43;12,16,1.00;12,29,0.22',
  '13,16,0.34;13,19,0.25;13,30,0.42;13,32,0.43;14,22,0.43;14,24,0.52;14,25,0.30;14,26,0.35',
  '14,28,0.55;15,29,0.28;16,27,0.35;16,29,0.27;16,32,0.53;17,18,0.94;17,20,0.38;17,21,0.28',
  '17,31,0.39;18,21,0.31;18,23,0.74;18,31,0.42;18,33,0.30;18,34,0.31;19,20,0.59;19,21,0.38',
  '19,30,0.56;20,21,0.83;21,30,0.25;21,33,0.54;21,42,0.52;22,24,0.69;22,25,0.50;22,35,0.41',
  '22,36,0.34;23,31,0.39;23,34,0.55;23,37,0.57;23,39,1.00;24,28,0.57;24,36,0.35;24,41,0.60',
  '25,35,0.39;25,38,0.27;26,28,0.58;26,43,0.35;26,48,0.30;27,29,0.57;27,32,0.30;27,40,0.20',
  '28,41,0.53;28,43,0.34;29,48,0.27;29,56,0.23;30,32,0.95;30,42,0.20;30,51,0.31;31,39,0.49',
  '31,44,0.34;31,47,0.31;32,40,0.28;32,51,0.27;32,68,0.29;33,34,0.79;33,42,0.27;34,37,0.46',
  '34,42,0.35;35,36,0.80;35,38,0.40;35,50,0.35;35,54,0.61;36,41,1.00;36,50,0.45;37,39,0.45',
  '37,42,0.56;37,46,0.28;37,57,0.27;38,45,0.93;38,54,0.32;38,81,0.74;39,44,0.64;39,46,0.61',
  '40,56,0.24;40,68,0.24;40,73,0.27;41,43,0.48;41,49,0.78;41,50,0.66;41,52,0.34;42,51,0.59',
  '42,57,0.65;43,48,0.48;43,49,0.28;43,58,0.31;44,46,0.83;44,47,0.75;45,54,0.27;45,60,0.83',
  '45,81,0.77;46,47,0.50;46,57,0.78;46,63,0.46;47,63,0.38;48,56,0.27;48,58,0.40;48,67,0.29',
  '49,52,0.52;49,55,0.67;49,58,0.61;50,52,0.85;50,54,0.51;50,59,0.30;50,74,0.34;51,53,0.28',
  '51,57,0.30;51,68,0.25;52,55,0.82;52,71,0.23;52,74,0.50;53,57,0.45;53,68,0.24;53,72,0.26',
  '53,80,0.26;53,91,0.24;53,108,0.40;53,113,0.25;54,59,0.30;54,60,0.52;54,61,0.34;55,58,0.33',
  '55,71,0.23;56,67,0.34;56,73,0.36;56,77,0.32;56,79,0.33;57,72,0.41;58,67,1.00;58,71,0.53',
  '58,76,0.44;59,61,0.56;59,62,0.81;59,74,0.22;60,61,0.41;60,65,0.40;60,69,0.54;60,81,0.78',
  '60,82,0.44;61,62,1.00;61,65,0.86;62,65,0.93;62,74,0.22;63,64,1.00;63,66,0.28;64,66,0.21',
  '64,70,0.39;65,74,0.22;65,75,0.23;65,82,0.54;65,83,0.49;66,70,0.71;66,94,0.26;66,102,0.30',
  '67,76,0.34;67,78,0.36;67,79,0.59;67,100,0.26;67,101,0.31;68,73,0.57;68,91,0.23;69,81,0.90',
  '69,82,0.52;69,92,0.62;70,84,0.21;70,88,0.48;70,90,0.55;70,95,1.00;71,74,0.28;71,76,0.44',
  '71,85,0.50;71,93,0.26;71,103,0.32;72,80,0.82;72,84,0.20;73,77,0.74;73,91,0.29;73,99,0.24',
  '74,75,0.68;74,89,0.30;74,93,0.31;75,83,0.65;75,89,0.33;76,78,0.76;76,85,0.83;77,79,0.77',
  '77,99,0.24;78,85,0.62;78,100,0.27;79,99,0.25;79,101,0.37;80,84,0.38;80,88,0.27;80,90,0.33',
  '81,92,0.44;81,97,0.43;81,104,0.40;81,117,0.46;82,83,0.36;82,86,0.39;82,87,0.45;82,92,1.00',
  '83,86,0.80;83,89,0.56;84,88,0.56;85,100,0.43;85,103,0.36;85,115,0.27;86,87,0.75;86,89,0.25',
  '87,89,0.27;87,92,1.00;88,90,0.76;89,92,0.78;89,93,0.53;89,98,0.81;89,107,0.60;90,95,0.92',
  '90,96,0.50;91,99,0.29;91,108,0.25;91,119,0.48;91,129,0.25;92,97,0.51;92,107,0.43;93,98,0.46',
  '93,103,0.34;94,102,1.00;94,109,1.00;95,96,0.65;95,109,0.35;95,116,0.34;95,122,0.23',
  '96,113,0.52;96,116,0.22;97,104,0.83;97,107,0.34;98,103,0.50;98,105,0.83;98,106,0.58',
  '98,107,0.36;99,101,0.25;99,119,0.33;100,101,0.23;100,115,0.25;100,118,0.45;100,144,0.66',
  '101,118,0.52;101,119,0.26;102,109,0.84;102,130,0.44;102,139,0.48;103,106,0.69;103,114,0.37',
  '103,115,0.39;104,107,0.27;104,110,0.80;104,117,0.84;105,106,0.47;105,107,0.41;105,112,0.82',
  '106,112,0.35;106,114,0.68;107,110,0.27;107,111,0.70;107,112,0.40;108,113,0.23;108,121,0.31',
  '108,129,0.43;109,120,0.48;109,130,0.31;110,111,0.63;110,117,0.84;110,125,0.62;111,112,0.42',
  '111,125,0.57;111,127,0.32;111,128,0.34;112,114,0.51;112,127,0.49;112,137,0.79;113,116,0.21',
  '113,121,0.31;113,123,0.36;113,126,0.25;114,115,0.86;114,134,0.58;114,137,0.44;114,138,0.42',
  '115,134,1.00;115,144,0.43;116,122,0.22;116,123,0.68;116,131,0.28;116,132,0.23;117,125,0.80',
  '117,133,0.59;118,119,0.36;118,142,0.50;118,144,0.51;119,129,0.24;119,142,0.72;119,143,0.34',
  '120,122,0.82;120,130,0.32;121,124,0.39;121,126,0.57;121,129,0.33;122,130,0.24;122,131,0.53',
  '123,126,0.47;123,135,0.60;123,152,0.20;123,154,0.21;124,126,1.00;124,129,0.99;124,150,0.22',
  '125,128,0.66;125,133,0.60;126,150,0.22;126,154,0.25;127,128,0.88;127,133,0.97;127,136,0.66',
  '127,137,0.43;127,140,0.52;128,133,0.78;129,143,0.23;129,150,0.38;129,157,0.46;129,158,0.26',
  '129,160,0.42;130,131,0.34;130,139,0.52;130,149,0.30;131,132,0.76;131,149,0.39;132,135,1.00',
  '132,149,0.49;133,136,0.57;134,138,0.40;134,144,0.54;134,145,0.72;135,148,0.39;135,149,0.66',
  '135,152,0.47;136,140,0.92;136,147,0.54;137,138,0.46;137,140,0.51;137,141,0.60;137,147,0.60',
  '138,145,0.45;138,147,1.00;139,149,0.48;139,159,0.49;139,177,0.42;140,141,0.87;140,147,0.55',
  '141,147,0.54;142,143,0.34;142,144,0.29;142,146,0.32;142,151,0.37;142,170,0.43;143,146,0.33',
  '143,155,0.38;143,157,0.38;144,145,0.58;144,151,0.35;144,156,0.94;145,147,0.28;145,156,0.64',
  '145,162,0.44;145,166,1.00;146,155,0.33;146,170,0.69;148,149,1.00;148,152,0.33;148,159,0.28',
  '148,164,0.51;148,165,0.68;148,168,0.48;149,159,0.40;150,153,0.37;150,154,0.30;150,158,0.22',
  '150,161,0.40;150,176,0.25;151,156,0.47;151,163,0.61;151,169,0.69;151,170,0.56;151,173,0.70',
  '152,153,0.34;152,154,0.68;152,164,0.30;153,154,0.35;153,164,0.56;153,167,0.34;153,176,0.32',
  '155,157,0.71;155,170,0.33;155,181,0.40;155,182,0.43;156,162,0.72;156,163,0.58;157,160,0.40',
  '157,174,0.25;157,178,0.29;157,181,0.31;158,160,0.72;158,161,0.37;159,168,0.35;159,177,0.40',
  '160,161,0.39;160,174,0.48;161,174,0.26;161,175,0.29;161,176,0.24;161,179,0.26;162,163,0.97',
  '162,166,0.68;163,166,0.45;163,169,0.74;164,165,0.85;164,167,0.53;164,171,0.46;165,168,0.57',
  '165,171,0.40;165,172,0.63;166,169,0.70;167,171,0.84;167,172,0.71;167,176,0.53;168,172,0.62',
  '168,177,0.48;169,173,0.80;169,192,1.00;170,173,0.91;170,182,0.40;170,192,0.54;171,172,0.88',
  '172,176,0.92;172,177,0.54;172,180,0.47;172,184,0.59;173,192,1.00;174,175,1.00;174,178,0.53',
  '175,178,0.64;175,179,0.28;175,185,0.50;175,186,0.34;176,179,0.69;176,180,0.60;177,184,0.59',
  '178,181,0.72;178,185,0.40;178,189,0.37;178,195,0.57;179,180,0.90;179,186,1.00;179,188,0.83',
  '179,190,0.77;180,184,0.54;180,188,0.61;181,182,0.37;181,183,0.41;181,187,0.57;181,189,0.43',
  '182,183,0.72;182,192,0.44;183,187,1.00;183,192,0.75;184,188,0.64;184,191,0.82;185,186,0.48',
  '185,193,0.65;185,195,0.75;186,190,0.91;186,193,0.44;186,194,0.38;187,189,0.53;187,192,0.88',
  '187,196,0.54;188,190,0.93;188,191,0.49;189,195,0.78;189,196,0.89;189,198,1.00;190,191,0.42',
  '190,194,0.30;191,194,1.00;192,196,1.00;192,200,1.00;192,201,1.00;193,194,0.57;193,195,0.97',
  '193,199,0.89;194,199,0.93;195,197,1.00;195,198,0.90;195,199,0.88;196,198,1.00;196,200,0.66',
  '197,198,0.84;197,199,0.80;197,200,0.47;197,201,0.60;197,203,0.40;198,200,0.68;199,203,0.60',
  '199,204,0.64;199,205,0.45;200,201,0.94;201,202,0.96;201,203,0.68;202,203,0.70;202,204,0.69',
  '202,205,0.72;203,204,0.92;204,205,0.52'
].join(';');
const CONTORNO = [
  '375,563 55,304 42,276 24,202 74,114 126,78 276,13 432,26 501,90 578,177 594,261 591,318',
  '542,412'
].join(' ');


const ZONAS = {
  centro: '#7C6CF7',
  pasado: '#22D3EE',
  actual: '#A855F7'
};

// acá está todo lo que dice la infografía, esto se cambia tranquilo.
// x e y van en porcentaje sobre el cerebro, y la zona decide el color:
// "pasado" es la mitad celeste y "actual" la violeta
const PUNTOS = [

  {
    id:'algoritmos', zona:'centro', x:48, y:45, chapa:'Empezá acá',
    tipo:'saludo',
    rotulo:'LOS ALGORITMOS',
    texto:'Los algoritmos son un conjunto ordenado y finito de instrucciones paso a paso que se llevan a cabo para resolver un problema o realizar una tarea.',
    llamado:'Te invitamos a explorar nuestro cerebro para conocer más sobre ellos',
    zonas:[
      { zona:'pasado', texto:'Si te interesa saber cómo era en el *pasado*, investigá la zona celeste del cerebro.' },
      { zona:'actual', texto:'Si te interesa saber cómo son en la *actualidad*, investigá la zona violeta del cerebro.' }
    ]
  },

  {
    id:'pioneros', zona:'pasado', x:64, y:30, chapa:'Pioneros',
    titulo:'Pioneros',
    texto:'Los primeros chatbot más rudimentarios',
    llamado:'¡Chatea con ellos!',
    estiloBotones:'pastilla',
    enlace:{ a:'modernas', texto:'Chatbots Modernos' },
    hijos:[
      { id:'eliza', boton:'ELIZA', tipo:'chat', nombre:'ELIZA', anio:'1966',
        pregunta:'Me siento muy estresado con mi trabajo.',
        respuesta:'¿Por qué dices que te sientes muy estresado con tu trabajo?',
        nota:'Reconoce palabras clave en una conversación y las reestructura como pregunta. Utilizaba un guion llamado "doctor".',
        etiqueta:'Mirroring' },
      { id:'alice', boton:'A.L.I.C.E', tipo:'chat', nombre:'A.L.I.C.E', anio:'1995',
        pregunta:'¿Tenés emociones reales?',
        respuesta:'Soy una entidad de software.\nMis emociones son simuladas.',
        nota:'Utilizaba una gigantesca base de datos estructurada con un lenguaje propio llamado Artificial Intelligence Markup Language.',
        etiqueta:'AIML' },
      { id:'parry', boton:'PARRY', tipo:'chat', nombre:'PARRY', anio:'1972',
        pregunta:'Deberías hablar con un médico sobre eso.',
        respuesta:'Los médicos están compinchados con la policía.\nNo son de fiar.',
        nota:'Emulaba a un paciente con esquizofrenia paranoide incorporando un modelo elemental de "estados emocionales" internos.',
        etiqueta:'Paranoia' }
    ]
  },

  {
    id:'tradicionales', zona:'pasado', x:82, y:52, chapa:'Sistemas tradicionales',
    rotulo:'Sistemas tradicionales',
    titulo:'¿Cómo funcionaban?',
    texto:'En los sistemas tradicionales, las instrucciones y reglas se definían previamente. La máquina ejecutaba esas instrucciones sobre una entrada para obtener un resultado.',
    diagrama:'ciclo',
    estiloBotones:'linea',
    hijos:[
      { id:'turing', boton:'1950 — TURING', tipo:'historia',
        anio:'1950', foto:IMG['h-turing.jpg'],
        rotulo:'TURING:', titulo:'¿Pueden pensar las máquinas?',
        parrafos:['Turing planteó reemplazar la pregunta abstracta "¿pueden pensar las máquinas?" por una prueba basada en el comportamiento: el juego de imitación, que posteriormente se conocería como Test de Turing.'],
        secciones:[{ titulo:'¿Cómo funcionaba la idea?',
          texto:'El entrevistador se comunica sin ver a los participantes y debe intentar determinar cuál es la máquina.' }],
        diagrama:'imitacion',
        cierre:'El test de Turing es un estándar que busca evaluar la capacidad de una máquina para generar respuestas que sean indistinguibles de las respuestas humanas.',
        caja:{ titulo:'¿Por qué es importante?',
          texto:'Porque introduce una cuestión que sigue presente en la IA: ¿cómo podemos reconocer o medir la inteligencia de una máquina?' } },

      { id:'dartmouth', boton:'1956 — DARTMOUTH', tipo:'historia',
        anio:'1956', foto:IMG['h-dartmouth.jpg'],
        rotulo:'DARTMOUTH:', titulo:'Nace la IA',
        secciones:[{ titulo:'¿Qué ocurrió?',
          texto:'En 1956 un grupo de científicos se reunió en Dartmouth durante el verano para investigar si aspectos de la inteligencia podían ser descritos con suficiente precisión como para que una máquina pudiera simularlos.' }],
        gente:[
          { id:'mccarthy', nombre:'John McCarthy', foto:IMG['p-mccarthy.jpg'],
            rol:'Creador del término "Inteligencia Artificial" (1955) y organizador de Dartmouth.',
            aporte:'Promovió el razonamiento basado en lógica abstracta, creó el lenguaje LISP y desarrolló los sistemas de tiempo compartido.' },
          { id:'minsky', nombre:'Marvin Minsky', foto:IMG['p-minsky.jpg'],
            rol:'Coorganizador del seminario y pionero en modelos biológicos y redes neuronales.',
            aporte:'Construyó en 1951 el SNARC (la primera máquina simuladora de redes neuronales). Cofundó el MIT AI Lab y formuló teorías clave sobre cómo la mente surge de agentes interactivos.' },
          { id:'shannon', nombre:'Claude Shannon', foto:IMG['p-shannon.jpg'],
            rol:'Padre de la Teoría de la Información.',
            aporte:'Transformó la computación al demostrar que el álgebra booleana podía aplicarse a circuitos eléctricos (bits y puertas lógicas). En Dartmouth aportó el marco matemático para procesar símbolos e información.' },
          { id:'rochester', nombre:'Nathaniel Rochester', foto:IMG['p-rochester.jpg'],
            rol:'Arquitecto jefe de computación industrial en IBM.',
            aporte:'Diseñó la computadora IBM 701 (la primera computadora científica producida en masa) y escribió los primeros programas de simulación de redes neuronales y comportamiento lógico en hardware comercial.' }
        ],
        buscaban:{ titulo:'¿Qué buscaban?', items:['Aprendizaje','Percepción','Lenguaje','Resolución de problemas'] },
        cierre:'El término "artificial intelligence" apareció en la propuesta del proyecto, asociada especialmente a John McCarthy.',
        caja:{ titulo:'¿Por qué es importante?', destaque:'El Gran Cambio de Paradigma:',
          texto:'Dartmouth reemplazó la idea de que la computadora era únicamente una "calculadora numérica gigantesca" y propuso que las máquinas podían manipular símbolos, lenguaje y conceptos abstractos.' } },

      { id:'perceptron', boton:'1957 — PERCEPTRÓN', tipo:'historia',
        anio:'1957', foto:IMG['h-perceptron.jpg'],
        rotulo:'PERCEPTRÓN:', titulo:'una máquina que aprende',
        parrafos:['Desarrollado por Frank Rosenblatt en 1957, el Perceptrón imitó el comportamiento de una neurona biológica. Marcó el paso decisivo de la programación rígida al aprendizaje automático (*machine learning*): el sistema ya no ejecutaba reglas fijas, sino que las ajustaba según los datos.'],
        secciones:[{ titulo:'¿Qué hacía?',
          texto:'El perceptrón era un modelo inspirado en el funcionamiento de las neuronas que podía clasificar patrones.' }],
        diagrama:'neurona',
        xor:{ boton:'Ver límite histórico (Problema XOR)',
          pie:'Incapacidad de resolver problemas no lineales con una sola capa',
          fuente:'Fuente: Perceptrons: An Introduction to Computational Geometry (Marvin Minsky & Seymour Papert, 1969).',
          contexto:'Contexto: limitación matemática que motivó el desarrollo de redes neuronales multicapa (Deep Learning).' },
        caja:{ titulo:'¿Por qué fue el puente al Machine Learning?',
          texto:'El Perceptrón introdujo la regla de corrección de errores: la máquina empieza respondiendo al azar, mide su margen de error y reajusta automáticamente sus pesos internos. Fue la demostración inicial de que los sistemas podían aprender directamente a partir de datos.' } }
    ]
  },

  {
    id:'ml', zona:'pasado', x:62, y:72, chapa:'Machine learning',
    rotulo:'MACHINE LEARNING',
    rotuloTecno:true,
    titulo:'¿Qué cambia cuando la máquina aprende?',
    texto:'En el aprendizaje automático, el sistema utiliza datos para aprender patrones y mejorar sus predicciones, en lugar de depender únicamente de reglas definidas de antemano.',
    diagrama:'entrena',
    nota:'NIST define machine learning como el desarrollo y uso de sistemas que se adaptan y aprenden de datos con el objetivo de mejorar su precisión.',
    estiloBotones:'ancho',
    hijos:[
      {
        id:'costo-entren', boton:'¿Y cuánto cuesta enseñarle?', tipo:'entrenamiento',
        titulo:'Costo estimado de entrenamiento',
        datos:[
          ['Datos','costos estimados de entrenamiento de modelos seleccionados.'],
          ['Período','2017–2024.'],
          ['Fuente de datos','Epoch AI (2024).'],
          ['Fuente secundaria','Stanford HAI, AI Index Report 2025, Fig. 1.3.24.'],
          ['Unidad','dólares estadounidenses, ajustados por inflación.'],
          ['Metodología','estimación basada en precios de alquiler de infraestructura computacional.'],
          ['Contexto','el aumento del costo está relacionado con el crecimiento de las necesidades computacionales de los modelos.']
        ],
        cita:'Fuente: Epoch AI, 2024',
        cierre:'A medida que aumentó la escala de los modelos, también aumentaron considerablemente los recursos computacionales necesarios para entrenarlos.'
      },
      {
        id:'como-aprende', boton:'¿Cómo se le enseña?',
        titulo:'¿Cómo aprenden?',
        texto:'No todas las máquinas aprenden igual. Tocá cada forma para ver cómo funciona.',
        estiloBotones:'pastilla',
        hijos:[
          { id:'nosupervisado', boton:'No supervisado', tipo:'nosupervisado',
            titulo:'Aprendizaje no supervisado',
            texto:'Búsqueda de *patrones ocultos*',
            guia:'Tocá la imagen para que busque patrones',
            pie:'Nadie le dice qué hay en la imagen: agrupa por sí solo lo que se parece entre sí.' },
          { id:'supervisado', boton:'Supervisado', tipo:'supervisado',
            titulo:'Aprendizaje supervisado',
            texto:'Proceso de *ajuste* manual',
            guia:'¡Ayudá a corregir a la IA! Tocá la etiqueta que está mal.',
            pie:'Aprende de ejemplos ya etiquetados por personas. Cada corrección ajusta el modelo.' },
          { id:'refuerzo', boton:'Por refuerzo', tipo:'refuerzo',
            titulo:'Aprendizaje por refuerzo',
            texto:'La IA recibe *recompensa* o *penalización* en base al resultado',
            guia:'Tocá para probar una acción',
            pie:'Prueba, se equivoca y repite lo que le dio mejor resultado.' }
        ]
      }
    ]
  },

  {
    id:'modernas', zona:'actual', x:22, y:38, chapa:'IA modernas',
    titulo:'IA Modernas: La Era de la Creación',
    texto:'Las IA de hoy no solo chatean, sino que crean y asisten de forma especializada. Interacciona con tres ejemplos actuales.',
    estiloBotones:'tarjeta',
    enlace:{ a:'pioneros', texto:'Los pioneros' },
    hijos:[
      { id:'chatgpt', boton:'ChatGPT', tipo:'chat', nombre:'ChatGPT', anio:'2022',
        pregunta:'¿Podés explicar cómo funcionan los modelos de lenguaje modernos como vos?',
        respuesta:'¡Claro! Los modelos como yo funcionamos basándonos en redes neuronales profundas (específicamente arquitecturas de Transformer) entrenadas con una cantidad masiva de texto de Internet. Aprendo patrones, gramática, hechos y estilos de escritura. Cuando hacés una pregunta, mi red predice la siguiente palabra más probable en una secuencia, un proceso llamado generación autorregresiva. No "entiendo" en el sentido humano, pero soy extremadamente bueno para imitar la comprensión.',
        nota:'Genera texto prediciendo el siguiente fragmento más probable, palabra por palabra.',
        etiqueta:'Transformer' },
      { id:'midjourney', boton:'Midjourney', tipo:'chat', nombre:'Midjourney', anio:'2022',
        pregunta:'Gato samurái ciberpunk, iluminación de neón, pose heroica, ultra detallado --ar 16:9 --v 6',
        respuesta:'Output: imagen generada, estilo Neo-Japan.',
        imagen:IMG['midjourney.jpg'],
        nota:'Traduce una descripción escrita en una imagen, partiendo de ruido y refinándolo paso a paso.',
        etiqueta:'Difusión' },
      { id:'copilot', boton:'GitHub Copilot', tipo:'chat', nombre:'GitHub Copilot', anio:'2021',
        pregunta:'Necesito una función de Python para ordenar una lista de diccionarios por una clave específica.',
        respuesta:'¡Acá tenés! Usando sorted() con una función lambda o itemgetter es eficiente:',
        codigo:"lista_ordenada = sorted(mi_lista,\n                        key=lambda x: x['clave'])",
        nota:'Autocompleta código leyendo el contexto del archivo en el que estás trabajando.',
        etiqueta:'Autocompletado' }
    ]
  },

  {
    id:'actuales', zona:'actual', x:13, y:58, chapa:'Sistemas actuales',
    rotulo:'Sistemas actuales',
    textoGrande:'Los modelos generativos utilizan patrones aprendidos para producir contenido nuevo.',
    diagrama:'ramas',
    nota:'NIST define la IA generativa como una clase de modelos que emulan la estructura y características de datos de entrada para generar contenido sintético derivado, incluyendo texto, imágenes, video y audio.',
    estiloBotones:'ancho',
    hijos:[
      {
        id:'expansion', boton:'¿Qué permitió que esto se expandiera?', tipo:'inferencia',
        titulo:'¿Qué hizo posible su expansión?',
        entrada:'Generar contenido requiere ejecutar el modelo cada vez que un usuario realiza una consulta. ¿Qué pasó con ese costo a medida que estos sistemas evolucionaron?',
        datos:[
          ['Indicador','costo de inferencia por millón de tokens.'],
          ['Referencia de rendimiento','nivel equivalente a GPT-3.5 en MMLU.'],
          ['Período','noviembre de 2022 – octubre de 2024.'],
          ['Fuentes de datos','Epoch AI y Artificial Analysis.'],
          ['Fuente secundaria','Stanford HAI, AI Index Report 2025, Fig. 1.3.22.'],
          ['Unidad','US$/millón de tokens.'],
          ['Escala original','logarítmica.']
        ],
        cita:'Epoch AI, 2025; Artificial Analysis, 2025',
        cierre:'Para que esa capacidad pudiera utilizarse masivamente, también tenía que ser posible ejecutarlos a un costo cada vez menor.',
        estiloBotones:'ancho',
        hijos:[
          { id:'mapa', boton:'¿Dónde se concentra este desarrollo?', tipo:'mapa',
            titulo:'¿Dónde se desarrollan los modelos?',
            texto:'40 modelos de IA notables producidos en 2024.',
            guia:'Pasá el cursor sobre cada foco para ver el dato.',
            fuente:'Fuente: Stanford HAI, AI Index Report 2025.',
            dato:'Dato: modelos de IA notables producidos en 2024.' }
        ]
      },
      {
        id:'datos', boton:'¿Qué datos usa el sistema?', tipo:'radar',
        titulo:'¿Qué datos usa el sistema?',
        texto:'Cada plataforma pondera de manera distinta las señales que usa para recomendarte contenido. Marcá y desmarcá para comparar.'
      }
    ]
  },

  {
    id:'redes', zona:'actual', x:32, y:20, chapa:'Redes neuronales',
    bloques:[
      { titulo:'¿Qué son las redes neuronales?',
        texto:'Una red neuronal es un modelo de *machine learning* que apila "neuronas" simples en capas y aprende a reconocer patrones a partir de datos para asignar entradas a outputs.' },
      { titulo:'¿Cómo reconoce patrones?',
        texto:'Las redes neuronales procesan información mediante capas de nodos interconectados. Durante el entrenamiento, ajustan sus conexiones para mejorar sus resultados.' }
    ],
    estiloBotones:'ancho',
    hijos:[
      { id:'grafico-redes', boton:'Ver gráfico de redes neuronales', tipo:'diagrama-redes',
        titulo:'REDES NEURONALES',
        texto:'Capas de nodos interconectados procesan información y ajustan sus pesos durante el entrenamiento.',
        fuente:'Fuente: Stanford HAI, AI Index 2025.',
        remate:'MÁS CAPAS → REPRESENTACIONES MÁS COMPLEJAS' }
    ]
  },

  {
    id:'chatbots', zona:'actual', x:11, y:20, chapa:'Chatbots modernos',
    titulo:'¿Cómo funcionan los chatbots modernos?',
    texto:'Tres características claves del proceso.',
    tipo:'chatbots',
    piezas:[
      { id:'memoria', icono:'cerebro', titulo:'Memoria activa', dibujo:'memoria',
        nota:'Cada respuesta vuelve a entrar como contexto: el modelo relee toda la conversación antes de contestar de nuevo.' },
      { id:'alineacion', icono:'embudo', titulo:'Alineación y control', dibujo:'embudo',
        nota:'Entre el modelo y vos hay un filtro que descarta respuestas inseguras y ajusta el tono.' },
      { id:'externa', icono:'salida', titulo:'Conexión externa', dibujo:'externa',
        nota:'Cuando le falta información, el modelo consulta un servidor externo y recién después te responde.' }
    ]
  },

  {
    id:'deep', zona:'actual', x:30, y:62, chapa:'Deep learning',
    rotulo:'DEEP LEARNING',
    rotuloTecno:true,
    textoGrande:'El deep learning utiliza redes neuronales con múltiples capas para aprender representaciones más complejas de los datos.',
    nota:'IBM señala que el deep learning es un subconjunto del *machine learning* basado en redes neuronales con muchas capas.',
    estiloBotones:'ancho',
    enlace:{ a:'redes', texto:'Ver las redes neuronales' },
    hijos:[
      { id:'como-funciona', boton:'Cómo funciona', tipo:'secuencia',
        titulo:'DEEP LEARNING',
        texto:'Búsqueda de *patrones ocultos*',
        guia:'Tocá para analizar',
        pasos:[
          { pie:'Entrada',         img:IMG['gato.jpg'] },
          { pie:'Análisis líneas', img:IMG['gato-lineas.png'] },
          { pie:'Análisis formas', img:IMG['gato-formas.png'] },
          { pie:'Gato (98%)',      img:IMG['gato.jpg'], final:true }
        ] }
    ]
  }
];

const EJES = ['Historial','Contexto','Tendencias','Interacciones','Tiempo','Similitudes con\notros usuarios'];
const PLATAFORMAS = [
  { id:'instagram', nombre:'Instagram', color:'#FF3D9A', valores:[6, 4, 5, 6, 1, 6] },
  { id:'youtube',   nombre:'YouTube',   color:'#FF6B3D', valores:[6, 1, 6, 6, 6, 6] },
  { id:'netflix',   nombre:'Netflix',   color:'#C74BFF', valores:[6, 6, 1, 5, 6, 6] },
  { id:'tiktok',    nombre:'TikTok',    color:'#3DE0D5', valores:[6, 3.5, 5, 5, 5.5, 4.5] }
];

const INFERENCIA = [
  { id:'gpt35', nombre:'GPT-3.5 → Llama-3.1-8B', color:'#2BB8F0',
    puntos:[[2022.83,70],[2023.05,4.2],[2023.95,0.9],[2024.4,0.105],[2024.7,0.075],[2024.95,0.05]] },
  { id:'gpt4', nombre:'GPT-4 → Gemini-1.5-Flash-8B', color:'#C43BE8',
    puntos:[[2023.2,45],[2023.45,6.2],[2023.95,1.3],[2024.35,0.6],[2024.65,0.25],[2024.72,0.1],[2024.98,0.04]] },
  { id:'gpt4o', nombre:'GPT-4o → DeepSeek-V3', color:'#2BE0D8',
    puntos:[[2024.38,10],[2024.55,7.5],[2024.73,1.9],[2024.9,0.85],[2025.08,0.3]] },
  { id:'claude', nombre:'Claude-3.5-Sonnet → Phi 4', color:'#E040A8',
    puntos:[[2024.47,10],[2024.63,7.6],[2024.8,3.6],[2024.95,0.85],[2025.05,0.06]] }
];

const ENTRENAMIENTO = [
  { anio:2017, nombre:'Transformer',              valor:0.67,  color:'#2B8FE8' },
  { anio:2019, nombre:'RoBERTa Large',            valor:0.16,  color:'#2B8FE8' },
  { anio:2019, nombre:'GPT-3 (175B)',             valor:4,     color:'#2B8FE8' },
  { anio:2021, nombre:'Megatron-Turing NLG 530B', valor:6,     color:'#2B8FE8' },
  { anio:2021, nombre:'LaMDA',                    valor:1,     color:'#2B8FE8' },
  { anio:2021, nombre:'PaLM (540B)',              valor:12,    color:'#2B8FE8' },
  { anio:2023, nombre:'GPT-4',                    valor:79,    color:'#2B8FE8' },
  { anio:2023, nombre:'PaLM 2',                   valor:29,    color:'#2B8FE8' },
  { anio:2023, nombre:'Llama 2-70B',              valor:3,     color:'#2B8FE8' },
  { anio:2023, nombre:'Falcon-180B',              valor:26,    color:'#8B4BF5' },
  { anio:2023, nombre:'Gemini 1.0 Ultra',         valor:192,   color:'#2B8FE8' },
  { anio:2024, nombre:'Mistral Large',            valor:41,    color:'#2B8FE8' },
  { anio:2024, nombre:'Llama 3.1-405B',           valor:170,   color:'#8B4BF5' },
  { anio:2024, nombre:'Grok-2',                   valor:107,   color:'#2B8FE8' }
];

const cuerpo  = document.body;
const cerebro = document.getElementById('cerebro');
const escena  = cerebro.parentElement;
const malla   = document.getElementById('malla');
const capaWin = document.getElementById('ventanas');
const pie     = document.getElementById('pie');
const SVG     = 'http://www.w3.org/2000/svg';
const quieto  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CORTE = 300;

const CELULAS = MALLA.split(';').map(s=>{
  const p = s.split(',');
  const x = +p[0];
  const brillo = Math.max(
    parseInt(p[3].substr(0,2),16),
    parseInt(p[3].substr(2,2),16),
    parseInt(p[3].substr(4,2),16)) / 255;
  return { x:x, y:+p[1], r:+p[2], lado:(x < CORTE ? 'actual' : 'pasado'), color:tinte(x, brillo) };
});
const LAZOS = ATADURAS.split(';').map(s=>{
  const p = s.split(',');
  return { a:+p[0], b:+p[1], f:+p[2] };
});

function tinte(x, brillo){
  const h = x < CORTE ? 276 : 188;
  const l = 34 + brillo * 42;
  const s = x < CORTE ? 88 : 92;
  return 'hsl(' + h + ' ' + s + '% ' + l.toFixed(0) + '%)';
}

const gHalo    = malla.appendChild(document.createElementNS(SVG,'g'));
const gLazos   = malla.appendChild(document.createElementNS(SVG,'g'));
const gChispas = malla.appendChild(document.createElementNS(SVG,'g'));
const gCelulas = malla.appendChild(document.createElementNS(SVG,'g'));
gHalo.setAttribute('class','halo');

LAZOS.forEach(l=>{
  const A = CELULAS[l.a], B = CELULAS[l.b];

  const color = ((A.x + B.x) / 2 < CORTE) ? A.color.replace(/hsl\((\d+)/, 'hsl(276') : B.color;
  const col = tinte((A.x + B.x) / 2, 0.55);

  const h = document.createElementNS(SVG,'line');
  h.setAttribute('x1',A.x); h.setAttribute('y1',A.y);
  h.setAttribute('x2',B.x); h.setAttribute('y2',B.y);
  h.setAttribute('stroke', col);
  h.setAttribute('stroke-width', (2.6 + l.f*2.4).toFixed(2));
  h.setAttribute('stroke-opacity', (0.05 + l.f*0.09).toFixed(2));
  gHalo.appendChild(h);

  const e = document.createElementNS(SVG,'line');
  e.setAttribute('class','lazo');
  e.setAttribute('x1',A.x); e.setAttribute('y1',A.y);
  e.setAttribute('x2',B.x); e.setAttribute('y2',B.y);
  e.setAttribute('stroke', col);
  e.setAttribute('stroke-width', (0.7 + l.f*0.5).toFixed(2));
  e.setAttribute('stroke-opacity', (0.34 + l.f*0.5).toFixed(2));
  gLazos.appendChild(e);
  l.nodo = e;
});

CELULAS.forEach(c=>{
  if(c.r > 2.6){
    const h = document.createElementNS(SVG,'circle');
    h.setAttribute('cx',c.x); h.setAttribute('cy',c.y);
    h.setAttribute('r', (c.r*3.1).toFixed(1));
    h.setAttribute('fill', c.color);
    h.setAttribute('fill-opacity','0.15');
    gHalo.appendChild(h);
  }
  const e = document.createElementNS(SVG,'circle');
  e.setAttribute('class','celula');
  e.setAttribute('cx',c.x); e.setAttribute('cy',c.y); e.setAttribute('r',c.r);
  e.setAttribute('fill', c.color);
  e.style.setProperty('--t', (2.6 + Math.random()*4).toFixed(1) + 's');
  e.style.setProperty('--d', (-Math.random()*6).toFixed(1) + 's');
  gCelulas.appendChild(e);
  c.nodo = e;
});

const tacto = document.createElementNS(SVG,'polygon');
tacto.setAttribute('class','tacto');
tacto.setAttribute('points', CONTORNO);
malla.insertBefore(tacto, gHalo);

if(!quieto){
  const largos = LAZOS.filter(l=>{
    const A = CELULAS[l.a], B = CELULAS[l.b];
    return Math.hypot(A.x-B.x, A.y-B.y) > 42;
  });
  for(let i=0;i<16;i++){
    const l = largos[Math.floor(Math.random()*largos.length)];
    const A = CELULAS[l.a], B = CELULAS[l.b];
    const p = Math.random() < .5 ? [A,B] : [B,A];
    const ch = document.createElementNS(SVG,'circle');
    ch.setAttribute('class','chispa');
    ch.setAttribute('r','2.1');
    ch.setAttribute('fill','#FFFFFF');
    const t = (i*0.55).toFixed(2) + 's';
    ch.innerHTML =
      '<animate attributeName="cx" values="'+p[0].x+';'+p[1].x+'" dur="2.4s" begin="'+t+'" repeatCount="indefinite"/>' +
      '<animate attributeName="cy" values="'+p[0].y+';'+p[1].y+'" dur="2.4s" begin="'+t+'" repeatCount="indefinite"/>' +
      '<animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin="'+t+'" repeatCount="indefinite"/>';
    gChispas.appendChild(ch);
  }
}

const porId = Object.create(null);
const vistos = Object.create(null);
let prendido = false, abierto = null;

function registrar(n, padre, zona){
  n.padre = padre || null;
  n.zona  = n.zona || zona;
  porId[n.id] = n;
  (n.hijos || []).forEach(h=>registrar(h, n, n.zona));
}
PUNTOS.forEach(p=>registrar(p, null, p.zona));

const CHAPAS = {
  eliza:'Eliza', alice:'A.L.I.C.E', parry:'Parry',
  turing:'1950', dartmouth:'1956', perceptron:'1957',
  'costo-entren':'Costos', nosupervisado:'No supervisado', supervisado:'Supervisado', refuerzo:'Refuerzo',
  chatgpt:'ChatGPT', midjourney:'Midjourney', copilot:'Copilot',
  expansion:'Inferencia', datos:'Señales',
  'grafico-redes':'Capas', 'como-funciona':'Capas ocultas', mapa:'Mapa'
};
const cables = document.getElementById('cables');
// lleva punto propio todo lo que tenga contenido; los que son sólo un menú no
const ORBES = Object.keys(porId).map(k=>porId[k]).filter(n=>n.padre && (n.tipo || !n.hijos));

function anguloDe(p){
  let a = Math.atan2(p.y - 50, p.x - 50);
  return a < 0 ? a + Math.PI*2 : a;
}
ORBES.sort((a,b)=>anguloDe(raiz(a)) - anguloDe(raiz(b)));
const arranque = ORBES.length ? anguloDe(raiz(ORBES[0])) : 0;
ORBES.forEach((n,i)=>{
  const a = arranque + Math.PI*2 * i / ORBES.length;
  n.ox = 50 + 66*Math.cos(a);
  n.oy = 50 + 64*Math.sin(a);

  const m = document.createElement('button');
  m.className = 'recuerdo';
  m.style.left = n.ox + '%';
  m.style.top  = n.oy + '%';
  m.style.setProperty('--c', ZONAS[n.zona]);
  m.setAttribute('aria-label', 'Ver de nuevo: ' + (CHAPAS[n.id] || n.boton));
  m.innerHTML = '<b>' + esc(CHAPAS[n.id] || n.boton) + '</b>';
  m.addEventListener('click', ()=>{ if(n.suelto) abrir(n); });
  cerebro.appendChild(m);
  n.orbe = m;

  const linea = document.createElementNS(SVG,'line');
  linea.style.stroke = ZONAS[n.zona];
  linea.setAttribute('stroke-width','1.2');
  cables.appendChild(linea);
  n.cable = linea;
});

function soltar(n){
  if(n.suelto) return;
  n.suelto = true;
  n.orbe.classList.add('viva');
  setTimeout(()=>{ tenderCables(); n.cable.classList.add('viva'); }, 160);
}

function tenderCables(){
  const caja = cables.getBoundingClientRect();
  ORBES.forEach(n=>{
    if(!n.suelto) return;
    const a = centro(raiz(n).nodo, caja), b = centro(n.orbe, caja);
    n.cable.setAttribute('x1', a.x); n.cable.setAttribute('y1', a.y);
    n.cable.setAttribute('x2', b.x); n.cable.setAttribute('y2', b.y);
  });
}
function centro(el, caja){
  const r = el.getBoundingClientRect();
  return { x: r.left - caja.left + r.width/2, y: r.top - caja.top + r.height/2 };
}

PUNTOS.forEach(p=>{
  const b = document.createElement('button');
  b.className = 'punto';
  b.style.left = p.x + '%';
  b.style.top  = p.y + '%';
  b.style.setProperty('--c', ZONAS[p.zona]);
  b.setAttribute('aria-label', p.chapa);
  b.innerHTML = '<i></i><b>' + esc(p.chapa) + '</b>';
  b.addEventListener('click', ()=>{ if(p.vivo) (abierto === p.id ? cerrar() : abrir(p)); });
  cerebro.appendChild(b);
  p.nodo = b;
  p.vivo = false;
});

tacto.addEventListener('click', prender);
malla.setAttribute('tabindex','0');
malla.setAttribute('role','button');
malla.addEventListener('keydown', e=>{
  if(!prendido && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); prender(); }
});

function prender(){
  if(prendido || cuerpo.classList.contains('cierre')) return;
  prendido = true;
  cuerpo.classList.add('oscuro');
  malla.removeAttribute('tabindex');
  pie.textContent = 'Explora el cerebro para descubrir la historia';

  if(!quieto){
    LAZOS.forEach(l=>{
      const d = (CELULAS[l.a].x + CELULAS[l.b].x) / 2 / 617 * 0.8;
      l.nodo.style.setProperty('--dp', d.toFixed(2) + 's');
      l.nodo.classList.add('prende');
    });
    CELULAS.forEach(c=>{
      c.nodo.style.setProperty('--dp', (c.x/617*0.8 + 0.12).toFixed(2) + 's');
      c.nodo.classList.add('prende');
    });
    setTimeout(()=>malla.querySelectorAll('.prende').forEach(n=>n.classList.remove('prende')), 2300);
  }

  ubicar();
  setTimeout(()=>cuerpo.classList.add('muda'), 3600);

  PUNTOS.forEach((p,i)=>{
    setTimeout(()=>{
      p.vivo = true;
      p.nodo.classList.add('viva','llama');
      setTimeout(()=>p.nodo.classList.remove('llama'), 3400);
    }, 620 + i*120);
  });

  setTimeout(()=>{ if(prendido && !abierto) abrir(porId['algoritmos']); }, 1900);
}

const barraHitos = document.getElementById('hitos');
const barraRelleno = document.getElementById('relleno');
const barraCuenta = document.getElementById('cuenta');
PUNTOS.forEach(p=>{
  const i = document.createElement('i');
  i.style.setProperty('--c', ZONAS[p.zona]);
  i.title = p.chapa;
  barraHitos.appendChild(i);
  p.hito = i;
});

const TODOS = Object.keys(porId).map(k=>porId[k]);

// un punto recién cuenta como explorado cuando también se abrieron todos los
// que cuelgan de él, incluidos los que quedan por fuera del cerebro
function completo(p){
  if(!vistos[p.id]) return false;
  let falta = false;
  (function mirar(n){
    (n.hijos || []).forEach(h=>{ if(!vistos[h.id]) falta = true; mirar(h); });
  })(p);
  return !falta;
}

function marcarProgreso(){
  const hechos = PUNTOS.filter(completo).length;
  const nodos  = TODOS.filter(n=>vistos[n.id]).length;
  PUNTOS.forEach(p=>{
    const listo = completo(p);
    p.hito.classList.toggle('on', listo);
    p.hito.title = p.chapa + (listo ? ' ✓' : ' — te falta explorarlo');
    p.nodo.classList.toggle('falta', !!vistos[p.id] && !listo);
    p.nodo.classList.toggle('listo', listo);
  });
  barraRelleno.style.width = (nodos / TODOS.length * 100) + '%';
  barraCuenta.textContent = hechos + '/' + PUNTOS.length + ' Conceptos Explorados';
  if(nodos === TODOS.length && !cuerpo.classList.contains('cierre')){
    setTimeout(cerrarInfografia, 1400);
  }
}

function cerrarInfografia(){
  cerrar();
  cuerpo.classList.remove('oscuro','muda');
  cuerpo.classList.add('cierre');
  escena.style.transform = '';
}

function cerrar(){
  capaWin.innerHTML = '';
  limpiarAsomos();
  document.querySelectorAll('.abierto').forEach(n=>n.classList.remove('abierto'));
  abierto = null;
  ubicar();
}

function raiz(n){ while(n.padre) n = n.padre; return n; }

function abrir(n){
  cerrar();
  const p = raiz(n);
  const color = ZONAS[n.zona];
  abierto = n.id;
  p.nodo.classList.add('abierto');

  vistos[n.id] = true;
  marcarProgreso();
  if(n !== p) p.nodo.classList.add('visto');
  if(n.orbe){ soltar(n); n.orbe.classList.add('abierto'); }

  const w = document.createElement('div');
  w.className = 'win'
    + (n.tipo === 'diagrama-redes' || n.tipo === 'entrenamiento' || n.tipo === 'mapa' ? ' enorme' : '')
    + (n.tipo === 'historia' ? ' relato' : '');
  w.style.setProperty('--accent', color);
  capaWin.appendChild(w);

  const top = document.createElement('div');
  top.className = 'win-top';
  if(n.padre){
    const v = document.createElement('button');
    v.className = 'volver';
    v.textContent = '← Volver';
    v.addEventListener('click', ()=>abrir(n.padre));
    top.appendChild(v);
  }else{
    top.appendChild(document.createElement('span')).style.marginRight = 'auto';
  }
  const x = document.createElement('button');
  x.className = 'cerrar';
  x.setAttribute('aria-label','Cerrar');
  x.innerHTML = '&times;';
  x.addEventListener('click', cerrar);
  top.appendChild(x);
  w.appendChild(top);

  const pintar = {
    chat:pintarChat, ficha:pintarFicha, radar:pintarRadar,
    inferencia:pintarInferencia, entrenamiento:pintarEntrenamiento,
    'diagrama-redes':pintarRedes, secuencia:pintarSecuencia,
    supervisado:pintarSupervisado, nosupervisado:pintarNoSupervisado, refuerzo:pintarRefuerzo,
    historia:pintarHistoria, chatbots:pintarChatbots, mapa:pintarMapa
  }[n.tipo] || pintarPanel;
  pintar(w, n);

  if(n.hijos) botonera(w, n);

  if(n.enlace){
    const e = document.createElement('button');
    e.className = 'enlace';
    e.textContent = n.enlace.texto;
    e.addEventListener('click', ()=>abrir(porId[n.enlace.a]));
    w.appendChild(e);
  }

  ubicar();
}

function botonera(w, n){
  if(n.estiloBotones === 'linea'){ lineaDeTiempo(w, n); return; }
  const fila = document.createElement('div');
  fila.className = 'acciones' + (n.estiloBotones === 'tarjeta' ? ' tarjetas' : '');
  n.hijos.forEach(h=>{
    const b = document.createElement('button');
    b.className = (n.estiloBotones === 'tarjeta' ? 'tarjeta'
                :  n.estiloBotones === 'ancho'   ? 'ancho' : 'pastilla')
                + (completo(h) ? ' visto' : vistos[h.id] ? ' a-medias' : '');
    b.textContent = h.boton;
    b.addEventListener('click', ()=>abrir(h));
    fila.appendChild(b);
  });
  w.appendChild(fila);
}

function pintarPanel(w, n){
  if(n.tipo === 'saludo') w.classList.add('saludo');

  if(n.rotulo){
    const r = document.createElement('span');
    r.className = 'rotulo' + (n.rotuloTecno ? ' tecno' : '');
    r.textContent = n.rotulo;
    w.appendChild(r);
  }
  if(n.titulo){
    const h = document.createElement('h2');
    if(n.rotulo) h.className = 'chico';
    h.textContent = n.titulo;
    w.appendChild(h);
  }
  if(n.textoGrande) w.appendChild(parrafo(n.textoGrande, 'texto grande'));
  if(n.texto)       w.appendChild(parrafo(n.texto, 'texto'));

  if(n.bloques){
    n.bloques.forEach((b,i)=>{
      const h = document.createElement('h3');
      h.className = 'seccion' + (i === 0 ? ' primera' : '');
      h.textContent = b.titulo;
      w.appendChild(h);
      w.appendChild(parrafo(b.texto, 'texto sangria'));
    });
  }
  if(n.llamado){
    const l = document.createElement('p');
    l.className = 'llamado';
    l.textContent = n.llamado;
    w.appendChild(l);
  }
  if(n.zonas){
    const z = document.createElement('div');
    z.className = 'zonas';
    n.zonas.forEach(o=>{
      const d = document.createElement('div');
      d.className = 'zona';
      d.style.setProperty('--c', ZONAS[o.zona]);
      d.innerHTML = '<span>' + rico(o.texto) + '</span>';
      z.appendChild(d);
    });
    w.appendChild(z);
  }
  if(n.diagrama){
    const caja = document.createElement('div');
    caja.className = 'diagrama';
    caja.innerHTML = n.diagrama === 'ciclo'   ? dibujoCiclo(ZONAS[n.zona])
                   : n.diagrama === 'entrena' ? dibujoEntrena(ZONAS[n.zona])
                   : dibujoRamas(ZONAS[n.zona]);

    if(n.diagrama === 'ramas') w.appendChild(caja);
    else {
      const dupla = document.createElement('div');
      dupla.className = 'dupla';
      const izq = document.createElement('div');
      while(w.children.length > 1 && w.children[1].tagName !== 'DIV') izq.appendChild(w.children[1]);
      dupla.appendChild(izq); dupla.appendChild(caja);
      w.appendChild(dupla);
    }
  }
  if(n.nota){
    const nota = document.createElement('div');
    nota.className = 'nota';
    nota.innerHTML = '<span>' + rico(n.nota) + '</span>';
    w.appendChild(nota);
  }
}

function parrafo(t, clase){
  const p = document.createElement('p');
  p.className = clase;
  p.innerHTML = rico(t);
  return p;
}

function lineaDeTiempo(w, n){
  const caja = document.createElement('div');
  caja.className = 'linea';
  const xs = [90, 300, 510];
  let g = '<line x1="40" y1="60" x2="560" y2="60" stroke="' + ZONAS[n.zona] + '" stroke-opacity=".5" stroke-width="1.2"/>';
  n.hijos.forEach((h,i)=>{
    const x = xs[i], arriba = i !== 1;
    const y = arriba ? 26 : 100;
    g += '<g class="hito' + (vistos[h.id] ? ' visto' : '') + '" data-id="' + h.id + '" tabindex="0" role="button">' +
      '<text x="' + x + '" y="' + y + '" text-anchor="middle">' + esc(h.boton) + '</text>' +
      '<line x1="' + x + '" y1="' + (arriba ? y+10 : y-22) + '" x2="' + x + '" y2="' + (arriba ? 52 : 68) + '" stroke="' + ZONAS[n.zona] + '" stroke-width="1.2"/>' +
      '<circle cx="' + x + '" cy="60" r="6"/></g>';
  });
  caja.innerHTML = '<svg viewBox="0 0 600 126" role="group" aria-label="Línea de tiempo">' + g + '</svg>';
  w.appendChild(caja);
  caja.querySelectorAll('.hito').forEach(el=>{
    const ir = ()=>abrir(porId[el.dataset.id]);
    el.addEventListener('click', ir);
    el.addEventListener('keydown', e=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); ir(); }});
  });
}

function pintarChat(w, n){
  const tit = document.createElement('span');
  tit.className = 'rotulo tecno';
  tit.textContent = n.nombre;
  w.appendChild(tit);

  const term = document.createElement('div');
  term.className = 'term';
  term.innerHTML =
    '<div class="term-top"><span>' + esc(n.nombre) + '</span><em>' + esc(n.anio) + '</em></div>' +
    '<div class="term-cuerpo"></div>' +
    '<div class="term-pie"><p>' + esc(n.nota) + '</p><b>' + esc(n.etiqueta) + '</b></div>';
  w.appendChild(term);

  const caja = term.querySelector('.term-cuerpo');
  const q = bloque(caja, 'usr >');
  tipear(q, n.pregunta, 16, ()=>{
    caja.appendChild(document.createElement('hr'));
    const a = bloque(caja, n.nombre + ' >');
    tipear(a, n.respuesta, 13, ()=>{
      a.appendChild(document.createElement('span')).className = 'cursor';
      if(n.imagen){
        const f = document.createElement('div');
        f.className = 'term-foto';
        f.innerHTML = '<img src="' + n.imagen + '" alt="Imagen generada">';
        caja.appendChild(f);
      }
      if(n.codigo){
        const c = document.createElement('pre');
        c.className = 'term-codigo';
        c.textContent = n.codigo;
        caja.appendChild(c);
      }
    });
  });
}

function bloque(caja, quien){
  const d = document.createElement('div');
  d.innerHTML = '<span class="quien">' + esc(quien) + '</span>';
  const p = document.createElement('p');
  d.appendChild(p);
  caja.appendChild(d);
  return p;
}

function tipear(el, texto, ms, listo){
  let i = 0;
  (function paso(){
    el.textContent = texto.slice(0, ++i);
    if(i < texto.length) setTimeout(paso, ms);
    else if(listo) listo();
  })();
}

function pintarFicha(w, n){
  w.classList.add('ficha');
  w.insertAdjacentHTML('beforeend',
    '<p class="anio">' + esc(n.anio) + '</p>' +
    '<h2 class="chico">' + esc(n.titulo) + '</h2>' +
    '<p class="texto">' + esc(n.texto) + '</p>');
}

function pintarRedes(w, n){
  w.insertAdjacentHTML('beforeend',
    '<span class="rotulo tecno">' + esc(n.titulo) + '</span>' +
    '<p class="texto">' + rico(n.texto) + '</p>' +
    '<div class="diagrama">' + dibujoRedes() + '</div>' +
    '<div class="remate"><span class="fuente">' + esc(n.fuente) + '</span>' +
    '<span class="conclusion">' + esc(n.remate) + '</span></div>');
}

function pintarSecuencia(w, n){
  w.insertAdjacentHTML('beforeend',
    '<span class="rotulo tecno">' + esc(n.titulo) + '</span>' +
    '<p class="texto">' + rico(n.texto) + '</p>');

  const guia = document.createElement('button');
  guia.className = 'guia';
  w.appendChild(guia);

  const tira = document.createElement('div');
  tira.className = 'secuencia';
  w.appendChild(tira);
  n.pasos.forEach(s=>{
    const f = document.createElement('figure');
    f.className = 'paso' + (s.final ? ' final' : '');
    f.innerHTML = '<img src="' + s.img + '" alt=""><figcaption>' + esc(s.pie) + '</figcaption>';
    tira.appendChild(f);
  });

  let visto = 1;
  function pintar(){
    [].forEach.call(tira.children, (f,i)=>f.classList.toggle('viva', i < visto));
    guia.textContent = visto < n.pasos.length ? n.guia : 'Volver a empezar';
  }
  guia.addEventListener('click', ()=>{ visto = visto < n.pasos.length ? visto + 1 : 1; pintar(); });
  tira.addEventListener('click', ()=>guia.click());
  pintar();
}

function cabezaAprende(w, n){
  w.classList.add('aprende');
  w.insertAdjacentHTML('beforeend',
    '<span class="rotulo">' + esc(n.titulo) + '</span>' +
    '<p class="texto grande">' + rico(n.texto) + '</p>');
}

function pintarSupervisado(w, n){
  cabezaAprende(w, n);
  const guia = document.createElement('p');
  guia.className = 'pista';
  guia.innerHTML = rico(n.guia);
  w.appendChild(guia);

  const fila = document.createElement('div');
  fila.className = 'muestras';
  w.appendChild(fila);

  const casos = [
    { arte:'<img src="' + IMG['perro-foto.jpg'] + '" alt="">', pone:'Perro', bien:'Perro' },
    { arte:'<img src="' + IMG['perro-foto.jpg'] + '" alt="">', pone:'Gato',  bien:'Perro' },
    { arte:'<img src="' + IMG['gato-foto.jpg'] + '" alt="">',  pone:'Gato',  bien:'Gato' }
  ];
  casos.forEach(c=>{
    const f = document.createElement('figure');
    f.className = 'muestra' + (c.pone !== c.bien ? ' mal' : '');
    f.innerHTML = '<div class="lienzo">' + c.arte + '</div><figcaption>' + c.pone + '</figcaption>';
    f.addEventListener('click', ()=>{
      if(c.pone === c.bien) return;
      c.pone = c.bien;
      f.className = 'muestra ok';
      f.querySelector('figcaption').textContent = c.bien + ' ✓';
      guia.innerHTML = '<b>¡Corregido!</b> El modelo acaba de ajustar sus pesos con tu corrección.';
    });
    fila.appendChild(f);
  });

  w.insertAdjacentHTML('beforeend', '<p class="pista">' + esc(n.pie) + '</p>');
}

function pintarNoSupervisado(w, n){
  cabezaAprende(w, n);
  const guia = document.createElement('p');
  guia.className = 'pista';
  guia.innerHTML = rico(n.guia);
  w.appendChild(guia);

  const fila = document.createElement('div');
  fila.className = 'muestras';
  fila.style.gridTemplateColumns = 'minmax(0,340px)';
  w.appendChild(fila);

  const f = document.createElement('figure');
  f.className = 'muestra';
  f.innerHTML = '<div class="lienzo"><img src="' + IMG['gato-foto.jpg'] + '" alt=""></div>' +
                '<figcaption>Sin etiquetas</figcaption>';
  fila.appendChild(f);

  const lienzo = f.querySelector('.lienzo');
  const cajas = [[30,18,16,14],[54,18,16,14],[36,40,26,18],[26,62,48,30]];
  let puesto = false;
  f.addEventListener('click', ()=>{
    if(puesto){
      lienzo.querySelectorAll('.marco').forEach(m=>m.remove());
      puesto = false;
      f.querySelector('figcaption').textContent = 'Sin etiquetas';
      guia.innerHTML = rico(n.guia);
      return;
    }
    puesto = true;
    cajas.forEach((c,i)=>{
      const m = document.createElement('div');
      m.className = 'marco';
      m.style.left = c[0]+'%'; m.style.top = c[1]+'%';
      m.style.width = c[2]+'%'; m.style.height = c[3]+'%';
      m.style.animationDelay = (i*180)+'ms';
      lienzo.appendChild(m);
    });
    f.querySelector('figcaption').textContent = '4 patrones agrupados';
    guia.innerHTML = 'Encontró grupos de píxeles que se repiten, <b>sin saber</b> que son orejas, ojos o un cuerpo.';
  });

  w.insertAdjacentHTML('beforeend', '<p class="pista">' + esc(n.pie) + '</p>');
}

function pintarRefuerzo(w, n){
  cabezaAprende(w, n);
  const guia = document.createElement('p');
  guia.className = 'pista';
  guia.innerHTML = rico(n.guia);
  w.appendChild(guia);

  const caja = document.createElement('div');
  caja.className = 'diagrama';
  caja.innerHTML = dibujoRefuerzo(ZONAS[n.zona]);
  w.appendChild(caja);

  let paso = 0;
  const premio = caja.querySelector('#rama-si');
  const castigo = caja.querySelector('#rama-no');
  caja.addEventListener('click', ()=>{
    paso = (paso + 1) % 3;
    premio.setAttribute('opacity', paso === 1 ? '1' : '.18');
    castigo.setAttribute('opacity', paso === 2 ? '1' : '.18');
    guia.innerHTML = paso === 1 ? 'Acertó: recibe una <b>recompensa</b> y va a repetir esa acción.'
                   : paso === 2 ? 'Falló: recibe una <b>penalización</b> y va a evitar esa acción.'
                   : rico(n.guia);
  });

  w.insertAdjacentHTML('beforeend', '<p class="pista">' + esc(n.pie) + '</p>');
}

function casillero(w, items, alCambiar){
  const fila = document.createElement('div');
  fila.className = 'casillas';
  const botones = items.map(it=>{
    const b = document.createElement('button');
    b.className = 'casilla on';
    b.style.setProperty('--c', it.color);
    b.innerHTML = '<span></span>' + esc(it.nombre);
    b.setAttribute('aria-pressed','true');
    b.addEventListener('click', ()=>{
      it.on = !it.on;
      b.classList.toggle('on', it.on);
      b.setAttribute('aria-pressed', String(it.on));
      alCambiar();
    });
    fila.appendChild(b);
    it.on = true;
    return b;
  });
  const todos = document.createElement('button');
  todos.className = 'casilla todos';
  todos.textContent = 'Desmarcar todo';
  todos.addEventListener('click', ()=>{
    const prender = items.every(i=>!i.on);
    items.forEach((it,i)=>{
      it.on = prender;
      botones[i].classList.toggle('on', prender);
      botones[i].setAttribute('aria-pressed', String(prender));
    });
    todos.textContent = prender ? 'Desmarcar todo' : 'Marcar todo';
    alCambiar();
  });
  fila.appendChild(todos);
  w.appendChild(fila);
}

function pintarInferencia(w, n){
  let filas = '';
  n.datos.forEach(d=>{ filas += '<b>' + esc(d[0]) + ':</b> ' + esc(d[1]) + '<br>'; });
  w.insertAdjacentHTML('beforeend',
    '<span class="rotulo">' + esc(n.titulo) + '</span>' +
    '<p class="texto grande" style="font-weight:600">' + esc(n.entrada) + '</p>' +
    '<p class="ficha-datos">' + filas + '</p>' +
    '<p class="cita">' + esc(n.cita) + '</p>');

  const fig = document.createElement('figure');
  fig.className = 'figura';
  fig.innerHTML = '<p class="cabeza">Costo de inferencia<small>USD por millón de tokens (escala logarítmica)</small></p><div class="lienzo"></div>';
  w.appendChild(fig);
  const lienzo = fig.querySelector('.lienzo');
  const redibujar = ()=>{ lienzo.innerHTML = dibujoInferencia(); };
  casillero(fig, INFERENCIA, redibujar);
  redibujar();

  w.insertAdjacentHTML('beforeend', '<p class="texto" style="margin-top:14px">' + esc(n.cierre) + '</p>');
}

function pintarEntrenamiento(w, n){
  let filas = '';
  n.datos.forEach(d=>{ filas += '<b>' + esc(d[0]) + ':</b> ' + esc(d[1]) + '<br>'; });
  w.insertAdjacentHTML('beforeend',
    '<span class="rotulo">' + esc(n.titulo) + '</span>' +
    '<p class="ficha-datos">' + filas + '</p>' +
    '<p class="cita">' + esc(n.cita) + '</p>');

  const anios = [2017,2019,2021,2023,2024].map(a=>({
    id:'a'+a, nombre:String(a), color:'#2B8FE8', anio:a
  }));

  const fig = document.createElement('figure');
  fig.className = 'figura';
  fig.innerHTML = '<p class="cabeza">Costo estimado de entrenamiento<small>millones de dólares</small></p><div class="lienzo"></div>';
  w.appendChild(fig);
  const lienzo = fig.querySelector('.lienzo');
  const redibujar = ()=>{
    const vivos = anios.filter(a=>a.on).map(a=>a.anio);
    lienzo.innerHTML = dibujoEntrenamiento(ENTRENAMIENTO.filter(m=>vivos.indexOf(m.anio) >= 0));
  };
  casillero(fig, anios, redibujar);
  redibujar();

  w.insertAdjacentHTML('beforeend', '<p class="texto" style="margin-top:14px">' + esc(n.cierre) + '</p>');
}

function pintarRadar(w, n){
  w.insertAdjacentHTML('beforeend',
    '<span class="rotulo">' + esc(n.titulo) + '</span>' +
    '<p class="texto">' + esc(n.texto) + '</p>');

  const fig = document.createElement('figure');
  fig.className = 'figura';
  fig.innerHTML = '<div class="lienzo"></div>';
  w.appendChild(fig);
  const lienzo = fig.querySelector('.lienzo');
  const redibujar = ()=>{ lienzo.innerHTML = dibujoRadar(PLATAFORMAS.filter(p=>p.on)); };
  casillero(fig, PLATAFORMAS, redibujar);
  redibujar();
}

function pintarHistoria(w, n){
  const foto = document.createElement('div');
  foto.className = 'relato-foto';
  foto.innerHTML = '<img src="' + n.foto + '" alt=""><span class="anio">' + esc(n.anio) + '</span>';
  w.appendChild(foto);

  const c = document.createElement('div');
  c.className = 'relato-cuerpo';
  w.appendChild(c);

  c.insertAdjacentHTML('beforeend',
    '<h2 class="chico"><span class="rot">' + esc(n.rotulo) + '</span> ' + esc(n.titulo) + '</h2>');
  (n.parrafos || []).forEach(p=>c.appendChild(parrafo(p, 'texto')));
  (n.secciones || []).forEach(sec=>{
    c.insertAdjacentHTML('beforeend', '<h3 class="seccion">' + esc(sec.titulo) + '</h3>');
    c.appendChild(parrafo(sec.texto, 'texto'));
  });

  if(n.gente){
    const fila = document.createElement('div');
    fila.className = 'gente';
    n.gente.forEach(g=>{
      const b = document.createElement('button');
      b.className = 'persona';
      b.innerHTML = '<span class="cara"><img src="' + g.foto + '" alt=""><i>?</i></span>' +
                    '<span class="nombre">' + esc(g.nombre) + '</span>';
      const ficha = '<b class="quien">' + esc(g.nombre).toUpperCase() + '</b>' +
        '<p><b>Rol:</b> ' + esc(g.rol) + '</p>' +
        '<p><b>Aporte clave:</b> ' + esc(g.aporte) + '</p>';
      asomar(b, ficha, 'ficha-persona');
      fila.appendChild(b);
    });
    c.appendChild(fila);
  }

  if(n.buscaban){
    c.insertAdjacentHTML('beforeend', '<h3 class="seccion">' + esc(n.buscaban.titulo) + '</h3>');
    const fila = document.createElement('div');
    fila.className = 'buscaban';
    const iconos = ['aprender','ojo','habla','armar'];
    n.buscaban.items.forEach((it,i)=>{
      fila.insertAdjacentHTML('beforeend',
        '<span class="busca">' + iconito(iconos[i]) + esc(it) + '</span>');
    });
    c.appendChild(fila);
  }

  if(n.diagrama){
    if(n.diagrama === 'neurona')
      c.insertAdjacentHTML('beforeend', '<h3 class="seccion centrado">Arquitectura simple</h3>');
    const d = document.createElement('div');
    d.className = 'diagrama';
    d.innerHTML = n.diagrama === 'imitacion' ? dibujoImitacion() : dibujoNeurona();
    c.appendChild(d);
  }

  if(n.cierre) c.appendChild(parrafo(n.cierre, 'texto'));

  if(n.xor){
    const b = document.createElement('button');
    b.className = 'enlace subrayado';
    b.textContent = n.xor.boton;
    asomar(b, '<div class="xor">' + dibujoXOR() +
      '<p class="pie">' + esc(n.xor.pie) + '</p>' +
      '<p class="fuente">' + esc(n.xor.fuente) + '<br>' + esc(n.xor.contexto) + '</p></div>', 'ficha-xor');
    c.appendChild(b);
  }

  if(n.caja){
    c.insertAdjacentHTML('beforeend',
      '<div class="caja"><b class="tit">' + esc(n.caja.titulo) + '</b>' +
      (n.caja.destaque ? '<i>' + esc(n.caja.destaque) + '</i>' : '') +
      '<p>' + esc(n.caja.texto) + '</p></div>');
  }
}

function asomar(disparador, html, clase){
  let caja = null;
  function mostrar(){
    if(caja) return;
    caja = document.createElement('div');
    caja.className = 'asomo ' + clase;
    caja.style.setProperty('--accent', getComputedStyle(disparador).getPropertyValue('--accent') || '#22D3EE');
    caja.innerHTML = html;
    document.body.appendChild(caja);
    const r = disparador.getBoundingClientRect();
    const a = caja.getBoundingClientRect();
    let x = r.left + r.width/2 - a.width/2;
    let y = r.bottom + 12;
    if(y + a.height > window.innerHeight - 12) y = r.top - a.height - 12;
    if(y < 12) y = 12;
    caja.style.left = Math.max(12, Math.min(x, window.innerWidth - a.width - 12)) + 'px';
    caja.style.top  = y + 'px';
    requestAnimationFrame(()=>caja.classList.add('viva'));
  }
  function ocultar(){ if(caja){ caja.remove(); caja = null; } }
  disparador.addEventListener('mouseenter', mostrar);
  disparador.addEventListener('mouseleave', ocultar);
  disparador.addEventListener('focus', mostrar);
  disparador.addEventListener('blur', ocultar);
  disparador.addEventListener('click', e=>{ e.preventDefault(); caja ? ocultar() : mostrar(); });
  asomos.push(ocultar);
}
const asomos = [];
function limpiarAsomos(){ asomos.splice(0).forEach(f=>f()); }

function iconito(cual){
  const p = {
    aprender:'<circle cx="8" cy="8" r="5.5"/><path d="M8 2.5v11M2.5 8h11"/>',
    ojo:'<path d="M1.5 8s2.6-4.5 6.5-4.5S14.5 8 14.5 8 11.9 12.5 8 12.5 1.5 8 1.5 8z"/><circle cx="8" cy="8" r="2"/>',
    habla:'<path d="M2 4.5h12v7H7l-3.5 3v-3H2z"/>',
    armar:'<rect x="2" y="2" width="5.5" height="5.5"/><rect x="8.5" y="8.5" width="5.5" height="5.5"/><path d="M7.5 5h6.5v3"/>'
  }[cual];
  return '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2">' + p + '</svg>';
}

function dibujoImitacion(){
  const c = 'var(--accent)';
  const persona = (x,y)=>'<g stroke="#E8ECF6" stroke-width="1.3" fill="none"><circle cx="'+x+'" cy="'+(y-6)+'" r="3.6"/><path d="M'+(x-6)+' '+(y+6)+'a6 6 0 0 1 12 0"/></g>';
  const maquina = (x,y)=>'<g stroke="#E8ECF6" stroke-width="1.3" fill="none"><rect x="'+(x-8)+'" y="'+(y-8)+'" width="11" height="9" rx="1"/><path d="M'+(x-5)+' '+(y+1)+'v3M'+(x-8)+' '+(y+4)+'h7"/><rect x="'+(x+4)+'" y="'+(y-5)+'" width="5" height="9" rx="1"/></g>';
  return '<svg viewBox="0 0 300 130" role="img" aria-label="Dos participantes y un entrevistador que no los ve">' +
    '<text x="70" y="16" text-anchor="middle" fill="#C77BFF" font-size="10" font-weight="700">Persona A</text>' +
    '<text x="215" y="16" text-anchor="middle" fill="#C77BFF" font-size="10" font-weight="700">Persona B</text>' +
    persona(70,42) + maquina(215,42) +
    '<path d="M74 58C92 78 118 84 136 88" stroke="'+c+'" stroke-width="1.4" fill="none"/>' +
    '<path d="M136 88l-7-1.5 3-4z" fill="'+c+'"/>' +
    '<path d="M211 58C193 78 167 84 149 88" stroke="'+c+'" stroke-width="1.4" fill="none"/>' +
    '<path d="M149 88l7-1.5-3-4z" fill="'+c+'"/>' +
    persona(143,100) +
    '<text x="143" y="122" text-anchor="middle" fill="#C77BFF" font-size="10" font-weight="700">Entrevistador</text>' +
    '<circle cx="245" cy="92" r="9" fill="none" stroke="'+c+'" stroke-width="1.2"/>' +
    '<text x="245" y="96" text-anchor="middle" fill="'+c+'" font-size="11" font-weight="700">?</text>' +
  '</svg>';
}

function dibujoNeurona(){
  const c = 'var(--accent)';
  let g = '';
  const ys = [34, 74, 114];
  ys.forEach((y,i)=>{
    g += '<text x="24" y="'+(y+5)+'" text-anchor="middle" fill="#E8ECF6" font-size="14">x</text>' +
         '<text x="32" y="'+(y+9)+'" fill="#E8ECF6" font-size="9">'+(i+1)+'</text>' +
         '<path d="M42 '+y+'L128 74" stroke="'+c+'" stroke-width="1.3" fill="none"/>' +
         '<path d="M128 74l-7-1v4z" fill="'+c+'"/>';
    if(i < 2) g += '<text x="'+(78+i*4)+'" y="'+(y + (i?18:-8))+'" fill="#C77BFF" font-size="11" font-style="italic" font-weight="700">w'+(i+1)+'</text>';
  });
  return '<svg viewBox="0 0 320 150" role="img" aria-label="Tres entradas con sus pesos entran a una suma y producen una salida">' +
    '<text x="24" y="14" text-anchor="middle" fill="#8A90A8" font-size="9">Input</text>' +
    '<text x="196" y="14" text-anchor="middle" fill="#C77BFF" font-size="9" letter-spacing="1">PROCESAMIENTO</text>' +
    '<text x="286" y="14" text-anchor="middle" fill="#8A90A8" font-size="9">Output</text>' + g +
    '<circle cx="150" cy="74" r="21" fill="none" stroke="'+c+'" stroke-width="1.4"/>' +
    '<text x="150" y="81" text-anchor="middle" fill="#E8ECF6" font-size="19">&#931;</text>' +
    '<path d="M173 74h84" stroke="'+c+'" stroke-width="1.3"/><path d="M259 74l-7-2.5v5z" fill="'+c+'"/>' +
    '<circle cx="286" cy="74" r="17" fill="none" stroke="'+c+'" stroke-width="1.4"/>' +
    '<text x="286" y="80" text-anchor="middle" fill="#E8ECF6" font-size="15" font-style="italic">y</text>' +
    '<text x="286" y="108" text-anchor="middle" fill="#8A90A8" font-size="9">Output</text>' +
  '</svg>';
}

function dibujoXOR(){
  function ejes(x0, titulo, sub, extra){
    const P = (a,b)=>[x0 + 40 + a*96, 118 - b*70];
    let g = '<text x="'+(x0+34)+'" y="18" fill="#E8ECF6" font-size="11.5" font-weight="700">'+titulo+'</text>' +
            '<text x="'+(x0+34)+'" y="31" fill="#8A90A8" font-size="9.5">'+sub+'</text>' +
            '<path d="M'+(x0+40)+' 40V122h118" stroke="#6C7488" stroke-width="1" fill="none"/>' +
            '<path d="M'+(x0+158)+' 122l-6-3v6z" fill="#6C7488"/>' +
            '<text x="'+(x0+30)+'" y="52" text-anchor="end" fill="#6C7488" font-size="9">1</text>' +
            '<text x="'+(x0+30)+'" y="122" text-anchor="end" fill="#6C7488" font-size="9">0</text>' +
            '<text x="'+(x0+40)+'" y="136" text-anchor="middle" fill="#6C7488" font-size="9">0,0</text>' +
            '<text x="'+(x0+136)+'" y="136" text-anchor="middle" fill="#6C7488" font-size="9">1,0</text>';
    g += extra(P);
    [[0,0,'(0,0)','#C77BFF'],[0,1,'(0,1)','#C77BFF'],[1,1,'(1,1)','#2BD4E8'],[1,0,'(1,0)','#C77BFF']].forEach(p=>{
      const q = P(p[0],p[1]);
      g += '<circle cx="'+q[0]+'" cy="'+q[1]+'" r="4.6" fill="'+p[3]+'"/>' +
           '<text x="'+(q[0]+8)+'" y="'+(q[1]+4)+'" fill="#9AA3B8" font-size="9">'+p[2]+'</text>';
    });
    return g;
  }
  const izq = ejes(0, 'SÍ RESUELVE', '(Linealmente separable)',
    P=>'<path d="M'+P(0,1.22)[0]+' '+P(0,1.22)[1]+'L'+P(1.22,0)[0]+' '+P(1.22,0)[1]+'" stroke="#2BD4E8" stroke-width="2.4" fill="none"/>');
  const der = ejes(240, 'NO RESUELVE', '(Función XOR)',
    P=>'<path d="M'+P(-0.08,1.28)[0]+' '+P(-0.08,1.28)[1]+'L'+P(1.28,-0.08)[0]+' '+P(1.28,-0.08)[1]+'" stroke="#8A90A8" stroke-width="1.8" stroke-dasharray="6 5" fill="none"/>' +
       '<path d="M'+P(-0.08,-0.08)[0]+' '+P(-0.08,-0.08)[1]+'L'+P(1.28,1.28)[0]+' '+P(1.28,1.28)[1]+'" stroke="#7B5BFF" stroke-width="1.8" stroke-dasharray="6 5" fill="none"/>');
  return '<svg viewBox="0 0 440 146" role="img" aria-label="Un perceptrón separa datos linealmente pero no resuelve la función XOR">' + izq + der + '</svg>';
}

function pintarChatbots(w, n){
  w.insertAdjacentHTML('beforeend',
    '<h2>' + esc(n.titulo) + '</h2><p class="texto">' + esc(n.texto) + '</p>');
  n.piezas.forEach(p=>{
    const caja = document.createElement('div');
    caja.className = 'pieza';
    const tit = document.createElement('div');
    tit.className = 'pieza-tit';
    tit.innerHTML = '<span>' + esc(p.titulo) + '</span>';
    const info = document.createElement('button');
    info.className = 'info';
    info.setAttribute('aria-label', 'Más sobre ' + p.titulo);
    info.textContent = 'i';
    asomar(info, '<p>' + esc(p.nota) + '</p>', 'ficha-info');
    tit.appendChild(info);
    caja.appendChild(tit);
    const d = document.createElement('div');
    d.className = 'diagrama';
    d.innerHTML = p.dibujo === 'memoria' ? dibujoMemoria()
                : p.dibujo === 'embudo'  ? dibujoEmbudo() : dibujoExterna();
    caja.appendChild(d);
    w.appendChild(caja);
  });
}

function cajita(x, y, ancho, texto, c){
  const alto = 30;
  return '<rect x="'+x+'" y="'+(y-alto/2)+'" width="'+ancho+'" height="'+alto+'" rx="4" fill="'+c+'" fill-opacity=".85" stroke="'+c+'"/>' +
         texto.split('\n').map((l,i,a)=>'<text x="'+(x+ancho/2)+'" y="'+(y + 3.5 + (i - (a.length-1)/2)*9.5)+'" text-anchor="middle" fill="#fff" font-size="8">'+l+'</text>').join('');
}

function dibujoMemoria(){
  const c = '#6D28F5';
  return '<svg viewBox="0 0 380 92" role="img" aria-label="El mensaje anterior y el nuevo prompt vuelven a entrar junto con la respuesta">' +
    cajita(40,58,74,'Mensaje\nanterior',c) +
    '<path d="M118 58h22" stroke="'+c+'" stroke-width="1.6"/><path d="M142 58l-7-3v6z" fill="'+c+'"/>' +
    cajita(144,58,74,'Nuevo prompt',c) +
    '<path d="M222 58h22" stroke="'+c+'" stroke-width="1.6"/><path d="M246 58l-7-3v6z" fill="'+c+'"/>' +
    cajita(248,58,68,'Respuesta',c) +
    '<path d="M316 44V22a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v16" fill="none" stroke="'+c+'" stroke-width="1.6"/>' +
    '<path d="M40 44l-3-7h6z" fill="'+c+'"/>' +
  '</svg>';
}

function dibujoEmbudo(){
  const c = '#6D28F5';
  return '<svg viewBox="0 0 380 92" role="img" aria-label="Entre el modelo y el usuario hay un filtro">' +
    '<text x="52" y="50" text-anchor="middle" fill="#E8ECF6" font-size="12">Modelo</text>' +
    '<path d="M92 46h30" stroke="'+c+'" stroke-width="1.8"/><path d="M126 46l-8-3.5v7z" fill="'+c+'"/>' +
    '<path d="M140 22h104l-40 30v22l-24-10V52z" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<circle cx="186" cy="40" r="4.5" fill="none" stroke="'+c+'" stroke-width="1.4"/>' +
    '<path d="M258 46h30" stroke="'+c+'" stroke-width="1.8"/><path d="M292 46l-8-3.5v7z" fill="'+c+'"/>' +
    '<text x="326" y="50" text-anchor="middle" fill="#E8ECF6" font-size="12">Usuario</text>' +
  '</svg>';
}

function dibujoExterna(){
  const c = '#6D28F5';
  return '<svg viewBox="0 0 380 104" role="img" aria-label="El modelo consulta un servidor externo antes de responder">' +
    cajita(26,34,64,'Modelo',c) +
    '<path d="M60 52v14a8 8 0 0 0 8 8h58" fill="none" stroke="'+c+'" stroke-width="1.6" stroke-dasharray="5 4"/>' +
    '<path d="M130 74l-7-3v6z" fill="'+c+'"/>' +
    cajita(132,74,80,'Servidor\nexterno',c) +
    '<path d="M212 74h36a8 8 0 0 0 8-8V52" fill="none" stroke="'+c+'" stroke-width="1.6" stroke-dasharray="5 4"/>' +
    '<path d="M256 48l-3 7h6z" fill="'+c+'"/>' +
    cajita(290,34,66,'Usuario',c) +
    '<path d="M262 34h22" stroke="'+c+'" stroke-width="1.6" stroke-dasharray="5 4"/><path d="M288 34l-7-3v6z" fill="'+c+'"/>' +
  '</svg>';
}

const FOCOS = [
  { id:'usa',    nombre:'EE.UU.', valor:'40', color:'#2BD4E8', x:28.1, y:40.1 },
  { id:'europa', nombre:'Europa', valor:'3',  color:'#F040C0', x:53.8, y:35.3 },
  { id:'china',  nombre:'China',  valor:'15', color:'#9B3FFF', x:73.3, y:47.2 }
];

function pintarMapa(w, n){
  w.insertAdjacentHTML('beforeend', '<p class="texto">' + esc(n.guia) + '</p>');

  const fig = document.createElement('figure');
  fig.className = 'figura mapa';
  const caja = document.createElement('div');
  caja.className = 'mapa-caja';
  caja.innerHTML = '<img src="' + IMG['mapa.png'] + '" alt="Mapa del mundo con los focos de desarrollo de modelos de IA">';
  fig.appendChild(caja);
  w.appendChild(fig);

  FOCOS.forEach(f=>{
    const b = document.createElement('button');
    b.className = 'foco';
    b.style.left = f.x + '%';
    b.style.top  = f.y + '%';
    b.style.setProperty('--c', f.color);
    b.setAttribute('aria-label', f.nombre + ': ' + f.valor + ' modelos notables');
    b.innerHTML = '<i></i><span class="dato"><b>' + esc(f.nombre) + '</b>' +
                  '<em>' + f.valor + '</em> modelos de IA notables en 2024</span>';
    b.addEventListener('click', ()=>b.classList.toggle('fijo'));
    caja.appendChild(b);
  });
}

function dibujoCiclo(c){
  const nodo = (x,y,tit,sub,icono) =>
    '<g><circle cx="'+x+'" cy="'+y+'" r="36" fill="#0B1020" stroke="'+c+'" stroke-width="1.3"/>' +
    icono(x, y-13) +
    '<text x="'+x+'" y="'+(y+13)+'" text-anchor="middle" fill="#fff" font-size="8.8" font-weight="700">'+tit+'</text>' +
    '<text x="'+x+'" y="'+(y+24)+'" text-anchor="middle" fill="#7E869C" font-size="7.5">'+sub+'</text></g>';
  const doc = (x,y)=>'<g stroke="'+c+'" stroke-width="1.3" fill="none"><rect x="'+(x-7)+'" y="'+(y-9)+'" width="14" height="18" rx="2"/><path d="M'+(x-3.5)+' '+(y-4)+'h7M'+(x-3.5)+' '+y+'h7M'+(x-3.5)+' '+(y+4)+'h4"/></g>';
  const lista=(x,y)=>'<g stroke="'+c+'" stroke-width="1.3" fill="none"><path d="M'+(x-2)+' '+(y-6)+'h9M'+(x-2)+' '+y+'h9M'+(x-2)+' '+(y+6)+'h9"/></g><g fill="'+c+'"><circle cx="'+(x-7)+'" cy="'+(y-6)+'" r="1.6"/><circle cx="'+(x-7)+'" cy="'+y+'" r="1.6"/><circle cx="'+(x-7)+'" cy="'+(y+6)+'" r="1.6"/></g>';
  const eng =(x,y)=>'<g stroke="'+c+'" stroke-width="1.3" fill="none"><circle cx="'+x+'" cy="'+y+'" r="4"/><circle cx="'+x+'" cy="'+y+'" r="8.5" stroke-dasharray="3 3"/></g>';
  const tick=(x,y)=>'<g stroke="'+c+'" stroke-width="1.3" fill="none"><circle cx="'+x+'" cy="'+y+'" r="8.5"/><path d="M'+(x-4)+' '+y+'l3 3 5-6"/></g>';
  return '<svg viewBox="0 0 340 220" role="img" aria-label="Ciclo: entrada, reglas, procesamiento y resultado">' +
    '<defs><marker id="pf" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">' +
      '<path d="M0 0l6 3-6 3z" fill="#8A90A8"/></marker></defs>' +
    '<g stroke="#8A90A8" stroke-width="1.1" fill="none" marker-end="url(#pf)">' +
      '<path d="M108 58h118"/><path d="M266 100v58"/><path d="M226 178H118"/><path d="M74 158v-58"/></g>' +
    nodo(70,62,'Entrada','Datos',doc) + nodo(266,62,'Reglas','Instrucciones',lista) +
    nodo(266,178,'Procesamiento','Ejecución lógica',eng) + nodo(70,178,'Resultado','Respuesta',tick) +
  '</svg>';
}

function dibujoRamas(c){
  const salidas = ['Texto','Imagen','Audio','Código'];
  let g = '';
  salidas.forEach((s,i)=>{
    const y = 24 + i*34;
    g += '<path d="M176 92 C196 92 196 '+y+' 216 '+y+'" stroke="'+c+'" stroke-width="1.2" fill="none"/>' +
         '<path d="M216 '+y+'l-5-3v6z" fill="'+c+'"/>' +
         '<text x="226" y="'+(y+4.5)+'" fill="#E8ECF6" font-size="13">'+s+'</text>';
  });
  return '<svg viewBox="0 0 320 190" role="img" aria-label="De los datos al modelo y del modelo a texto, imagen, audio y código">' +
    '<text x="8" y="97" fill="#E8ECF6" font-size="14">Datos</text>' +
    '<path d="M56 92h34" stroke="'+c+'" stroke-width="1.2"/><path d="M92 92l-5-3v6z" fill="'+c+'"/>' +
    '<text x="98" y="97" fill="#E8ECF6" font-size="14">Modelo</text>' + g + '</svg>';
}

function dibujoEntrena(c){
  const pasos = [
    ['Datos','M-7-6h14v12h-14z M-7-2h14 M-7 2h14'],
    ['Entrenamiento','M0-7a7 7 0 1 0 .1 0z M0-3a3 3 0 1 0 .1 0z'],
    ['Modelo','M0-8 8 0 0 8 -8 0z'],
    ['Predicción','M0-8a8 8 0 1 0 .1 0z M0-3a3 3 0 1 0 .1 0z']
  ];
  const xs = [42,126,210,294];
  let g = '';
  xs.forEach((x,i)=>{
    g += '<circle cx="'+x+'" cy="54" r="24" fill="#0B1020" stroke="'+c+'" stroke-width="1.3"/>' +
         '<path transform="translate('+x+' 54)" d="'+pasos[i][1]+'" fill="none" stroke="'+c+'" stroke-width="1.3"/>' +
         '<text x="'+x+'" y="96" text-anchor="middle" fill="#B9C0D2" font-size="9.5">'+pasos[i][0]+'</text>';
    if(i < 3) g += '<path d="M'+(x+26)+' 54h30" stroke="'+c+'" stroke-width="1.2"/>' +
                   '<path d="M'+(x+58)+' 54l-6-3.5v7z" fill="'+c+'"/>';
  });
  g += '<path d="M294 82v34H42V78" fill="none" stroke="#FF8A5B" stroke-width="1.1" stroke-dasharray="4 4"/>' +
       '<path d="M42 74l-3.5 6h7z" fill="#FF8A5B"/>' +
       '<text x="168" y="131" text-anchor="middle" fill="#FF8A5B" font-size="9.5">Error</text>';
  return '<svg viewBox="0 0 336 142" role="img" aria-label="Datos, entrenamiento, modelo y predicción, con el error que vuelve a los datos">'+g+'</svg>';
}

function dibujoRedes(){
  const COL = ['#2EE6E0','#2F7BFF','#2B55F5','#7B3FFF','#D93FE8'];
  const xs = [120,290,460,630,800], ys = [150,215,280,345,410], r = 21;
  let g = '';
  for(let c=0;c<4;c++) ys.forEach(y1=>ys.forEach(y2=>{
    g += '<line x1="'+(xs[c]+r)+'" y1="'+y1+'" x2="'+(xs[c+1]-r)+'" y2="'+y2+'" stroke="'+COL[c]+'" stroke-width="0.9" stroke-opacity="0.5"/>';
  }));
  ys.forEach(y=>{
    g += '<line x1="44" y1="'+y+'" x2="'+(xs[0]-r-6)+'" y2="'+y+'" stroke="'+COL[0]+'" stroke-width="1.1" stroke-opacity=".7"/>' +
         '<path d="M'+(xs[0]-r-6)+' '+y+'l-6-3.5v7z" fill="'+COL[0]+'"/><circle cx="44" cy="'+y+'" r="2" fill="'+COL[0]+'"/>' +
         '<line x1="'+(xs[4]+r+6)+'" y1="'+y+'" x2="874" y2="'+y+'" stroke="'+COL[4]+'" stroke-width="1.1" stroke-opacity=".7"/>' +
         '<path d="M880 '+y+'l-6-3.5v7z" fill="'+COL[4]+'"/>';
  });
  xs.forEach((x,c)=>ys.forEach(y=>{
    g += '<circle cx="'+x+'" cy="'+y+'" r="'+(r+9)+'" fill="'+COL[c]+'" fill-opacity=".1"/>' +
         '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="#070B16" stroke="'+COL[c]+'" stroke-width="2.4"/>' +
         '<circle cx="'+x+'" cy="'+y+'" r="'+(r-3)+'" fill="'+COL[c]+'" fill-opacity=".2"/>';
  }));
  const chapa = (x,ancho,texto,color,hacia)=>
    '<g><rect x="'+x+'" y="43" width="'+ancho+'" height="30" rx="15" fill="#070B16" stroke="'+color+'" stroke-width="1.2" stroke-opacity=".8"/>' +
    '<circle cx="'+(x+18)+'" cy="58" r="4.5" fill="'+color+'"/>' +
    '<text x="'+(x+32)+'" y="62.5" fill="'+color+'" font-size="12.5" letter-spacing="1.6">'+texto+'</text>' +
    '<path d="M'+hacia+' 74V110" stroke="'+color+'" stroke-width="1" stroke-dasharray="3 4" stroke-opacity=".65"/>' +
    '<path d="M'+hacia+' 118l-3.5-6h7z" fill="'+color+'" fill-opacity=".8"/></g>';
  g += chapa(44,214,'CAPA DE ENTRADA',COL[0],120) + chapa(352,196,'CAPAS OCULTAS',COL[1],460) + chapa(700,190,'CAPA DE SALIDA',COL[4],800);
  g += '<path d="M290 92V78h340v14" fill="none" stroke="'+COL[1]+'" stroke-width="1" stroke-opacity=".45"/>';
  return '<svg viewBox="0 0 900 470" role="img" aria-label="Diagrama de una red neuronal con capa de entrada, tres capas ocultas y capa de salida">'+g+'</svg>';
}

function dibujoRefuerzo(c){
  return '<svg viewBox="0 0 340 170" role="img" aria-label="La IA prueba una acción y recibe recompensa o penalización">' +
    perroVector(40, 85, '#9AB4FF') +
    '<path d="M86 85h40" stroke="'+c+'" stroke-width="1.3"/><path d="M128 85l-6-3.5v7z" fill="'+c+'"/>' +
    '<circle cx="152" cy="85" r="17" fill="#0B1020" stroke="'+c+'" stroke-width="1.3"/>' +
    '<path d="M152 78a6 6 0 0 1 3 11v3h-6v-3a6 6 0 0 1 3-11z" fill="none" stroke="'+c+'" stroke-width="1.2"/>' +
    '<text x="152" y="122" text-anchor="middle" fill="#8890A6" font-size="9">acción</text>' +
    '<g id="rama-si" opacity=".18">' +
      '<path d="M172 78C210 78 214 44 250 44" stroke="#4ADE80" stroke-width="1.6" fill="none"/>' +
      '<circle cx="262" cy="44" r="13" fill="#08221A" stroke="#4ADE80" stroke-width="1.4"/>' +
      '<path d="M256 44l4 4 7-8" stroke="#4ADE80" stroke-width="1.8" fill="none"/>' +
      '<text x="282" y="48" fill="#4ADE80" font-size="10.5" font-weight="700">Recompensa</text></g>' +
    '<g id="rama-no" opacity=".18">' +
      '<path d="M172 92C210 92 214 126 250 126" stroke="#FF5A6E" stroke-width="1.6" fill="none"/>' +
      '<circle cx="262" cy="126" r="13" fill="#220A0E" stroke="#FF5A6E" stroke-width="1.4"/>' +
      '<path d="M257 121l10 10M267 121l-10 10" stroke="#FF5A6E" stroke-width="1.8"/>' +
      '<text x="282" y="130" fill="#FF5A6E" font-size="10.5" font-weight="700">Penalización</text></g>' +
  '</svg>';
}

function perroVector(x, y, c){
  return '<g transform="translate('+x+' '+y+')" fill="none" stroke="'+c+'" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">' +
    '<path d="M-16-14l-5-14 12 5"/><path d="M16-14l5-14-12 5"/>' +
    '<path d="M-17-13c0-11 8-17 17-17s17 6 17 17c0 12-7 19-17 19s-17-7-17-19z"/>' +
    '<circle cx="-7" cy="-14" r="1.9" fill="'+c+'" stroke="none"/><circle cx="7" cy="-14" r="1.9" fill="'+c+'" stroke="none"/>' +
    '<path d="M0-6v3M-4 0a4 4 0 0 0 8 0" />' +
    '<ellipse cx="0" cy="-6" rx="3.4" ry="2.4" fill="'+c+'" stroke="none"/>' +
  '</g>';
}
function perro(c){
  return '<svg viewBox="22 34 76 76" aria-hidden="true"><rect x="0" y="0" width="120" height="120" fill="#080C16"/>' +
    perroVector(60, 72, c) + '</svg>';
}

function dibujoRadar(activas){
  const cx=196, cy=152, R=92, N=6, MAX=6;
  const ang = i => (Math.PI*2*i/N) - Math.PI/2;
  const punto = (i,v) => [cx + Math.cos(ang(i))*R*v/MAX, cy + Math.sin(ang(i))*R*v/MAX];
  let g = '';
  for(let r=2;r<=MAX;r+=2){
    let d='';
    for(let i=0;i<N;i++){ const p=punto(i,r); d += (i?'L':'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }
    g += '<path d="'+d+'Z" fill="none" stroke="rgba(255,255,255,.13)" stroke-width="1"/>';
  }
  for(let i=0;i<N;i++){
    const p = punto(i,MAX);
    g += '<line x1="'+cx+'" y1="'+cy+'" x2="'+p[0].toFixed(1)+'" y2="'+p[1].toFixed(1)+'" stroke="rgba(255,255,255,.13)"/>';
    const l = [cx + Math.cos(ang(i))*(R+17), cy + Math.sin(ang(i))*(R+19)];
    const an = Math.abs(Math.cos(ang(i))) < .3 ? 'middle' : (Math.cos(ang(i)) > 0 ? 'start' : 'end');
    EJES[i].split('\n').forEach((linea,k)=>{
      g += '<text x="'+l[0].toFixed(1)+'" y="'+(l[1]+k*10).toFixed(1)+'" text-anchor="'+an+'" fill="#98A0B4" font-size="8.6" letter-spacing=".05em">'+linea.toUpperCase()+'</text>';
    });
  }
  activas.forEach(pl=>{
    let d='';
    pl.valores.forEach((v,i)=>{ const p=punto(i,v); d += (i?'L':'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); });
    const relleno = activas.length === 1 ? .3 : .12;
    g += '<path d="'+d+'Z" fill="'+pl.color+'" fill-opacity="'+relleno+'" stroke="'+pl.color+'" stroke-width="1.8" stroke-linejoin="round"/>';
    pl.valores.forEach((v,i)=>{ const p=punto(i,v); g += '<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="2.6" fill="'+pl.color+'"/>'; });
  });
  if(!activas.length) g += '<text x="'+cx+'" y="'+(cy+4)+'" text-anchor="middle" fill="#5E6678" font-size="11">marcá una plataforma</text>';
  return '<svg viewBox="0 0 392 300" role="img" aria-label="Gráfico de araña con las señales que usa cada plataforma">'+g+'</svg>';
}

function dibujoInferencia(){
  const W=720, H=360, L=54, R=190, T=18, B=44;
  const x0=2022.7, x1=2025.2;
  const ex = v => L + (v-x0)/(x1-x0)*(W-L-R);
  const ey = v => T + (2 - Math.log10(v))/4*(H-T-B);
  let g = '';
  [100,10,1,0.1,0.01].forEach(v=>{
    g += '<line x1="'+L+'" y1="'+ey(v).toFixed(1)+'" x2="'+(W-R)+'" y2="'+ey(v).toFixed(1)+'" stroke="rgba(255,255,255,.1)" stroke-dasharray="3 5"/>' +
         '<text x="'+(L-9)+'" y="'+(ey(v)+4).toFixed(1)+'" text-anchor="end" fill="#6F7689" font-size="10">'+v+'</text>';
  });
  [[2022.83,'Sep 2022'],[2023.08,'Ene 2023'],[2023.42,'May 2023'],[2023.75,'Sep 2023'],[2024.08,'Ene 2024'],[2024.42,'May 2024'],[2024.75,'Sep 2024'],[2025.08,'Ene 2025']].forEach(t=>{
    g += '<text x="'+ex(t[0]).toFixed(1)+'" y="'+(H-B+20)+'" text-anchor="middle" fill="#6F7689" font-size="9.5">'+t[1]+'</text>';
  });
  g += '<line x1="'+L+'" y1="'+(H-B)+'" x2="'+(W-R)+'" y2="'+(H-B)+'" stroke="rgba(255,255,255,.2)"/>';

  INFERENCIA.forEach(s=>{
    if(!s.on) return;
    let d='';
    s.puntos.forEach((p,i)=>{ d += (i?'L':'M') + ex(p[0]).toFixed(1) + ' ' + ey(p[1]).toFixed(1); });
    g += '<path d="'+d+'" fill="none" stroke="'+s.color+'" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>';
    s.puntos.forEach(p=>{ g += '<circle cx="'+ex(p[0]).toFixed(1)+'" cy="'+ey(p[1]).toFixed(1)+'" r="3.2" fill="'+s.color+'"/>'; });
    const f = s.puntos[s.puntos.length-1];
    g += '<text x="'+(ex(f[0])+9).toFixed(1)+'" y="'+(ey(f[1])+4).toFixed(1)+'" fill="'+s.color+'" font-size="10.5" font-weight="600">'+esc(s.nombre.split('→')[1].trim())+'</text>';
    const p0 = s.puntos[0];
    g += '<text x="'+ex(p0[0]).toFixed(1)+'" y="'+(ey(p0[1])-11).toFixed(1)+'" fill="'+s.color+'" font-size="10.5" font-weight="600">'+esc(s.nombre.split('→')[0].trim())+'</text>';
  });
  g += '<text x="'+((L+W-R)/2)+'" y="'+(H-4)+'" text-anchor="middle" fill="#5E6678" font-size="9.5">Fecha de publicación</text>';
  return '<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Costo de inferencia por millón de tokens entre 2022 y 2025">'+g+'</svg>';
}

function dibujoEntrenamiento(modelos){
  const W=760, H=340, L=58, T=18, B=110;
  const max=200;
  const ey = v => T + (1 - v/max)*(H-T-B);
  let g = '';
  [0,50,100,150,200].forEach(v=>{
    g += '<line x1="'+L+'" y1="'+ey(v).toFixed(1)+'" x2="'+(W-14)+'" y2="'+ey(v).toFixed(1)+'" stroke="rgba(255,255,255,.09)"/>' +
         '<text x="'+(L-9)+'" y="'+(ey(v)+4).toFixed(1)+'" text-anchor="end" fill="#6F7689" font-size="10">'+(v?v+'M':'0')+'</text>';
  });
  if(!modelos.length){
    g += '<text x="'+(W/2)+'" y="'+(H/2)+'" text-anchor="middle" fill="#5E6678" font-size="12">marcá un año</text>';
    return '<svg viewBox="0 0 '+W+' '+H+'">'+g+'</svg>';
  }
  const paso = (W-L-24)/modelos.length;
  const ancho = Math.min(38, paso*0.6);
  modelos.forEach((m,i)=>{
    const x = L + paso*i + paso/2;
    const y = ey(m.valor);
    g += '<rect x="'+(x-ancho/2).toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+ancho.toFixed(1)+'" height="'+(ey(0)-y).toFixed(1)+'" rx="2" fill="'+m.color+'" fill-opacity=".8" stroke="'+m.color+'" stroke-width="1"/>' +
         '<text x="'+x.toFixed(1)+'" y="'+(y-7).toFixed(1)+'" text-anchor="middle" fill="#DCE3F2" font-size="10" font-weight="700">'+(m.valor<1 ? Math.round(m.valor*1000)+'K' : m.valor+'M')+'</text>' +
         '<text transform="translate('+x.toFixed(1)+' '+(ey(0)+9)+') rotate(58)" fill="#828A9E" font-size="9">'+esc(m.nombre)+'</text>';
  });
  g += '<line x1="'+L+'" y1="'+ey(0)+'" x2="'+(W-14)+'" y2="'+ey(0)+'" stroke="rgba(255,255,255,.22)"/>';
  return '<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Costo estimado de entrenamiento por modelo">'+g+'</svg>';
}

let sitio = null;
function medirSitio(){
  const guarda = escena.style.transform, paso = escena.style.transition;
  escena.style.transition = 'none';
  escena.style.transform = 'none';
  const r = escena.getBoundingClientRect();
  sitio = { cx: r.left + r.width/2, cy: r.top + r.height/2 };
  escena.style.transform = guarda;
  escena.getBoundingClientRect();
  escena.style.transition = paso;
}

function ubicar(){
  if(window.innerWidth < 981){ escena.style.transform = ''; return; }
  if(!sitio) medirSitio();
  if(!prendido){ escena.style.transform = ''; return; }

  const win = capaWin.querySelector('.win');
  const tope = win ? win.getBoundingClientRect().left - 26 : window.innerWidth;
  const anchoLibre = win ? tope - 34 : window.innerWidth*0.66;
  const altoLibre  = win ? window.innerHeight*0.76 : window.innerHeight*0.8;

  const zoom = Math.max(1, Math.min(
    anchoLibre / (cerebro.offsetWidth * 1.32),
    altoLibre  / (cerebro.offsetHeight * 1.28), 2.4));

  const cx = win ? tope/2 : window.innerWidth*0.5;
  escena.style.transform =
    'translate(' + Math.round(cx - sitio.cx) + 'px,' +
                   Math.round(window.innerHeight/2 - sitio.cy) + 'px) scale(' + zoom.toFixed(3) + ')';
  seguir();
}

function seguir(){
  clearInterval(seguir.t);
  let n = 0;
  tenderCables();
  seguir.t = setInterval(()=>{ tenderCables(); if(++n > 24) clearInterval(seguir.t); }, 34);
}

document.getElementById('salir').addEventListener('click', cerrar);

function reiniciar(){
  cerrar();
  prendido = false;
  cuerpo.classList.remove('oscuro','muda','cierre');
  malla.setAttribute('tabindex','0');
  pie.textContent = 'Hacé clic en el cerebro';
  PUNTOS.forEach(p=>{
    p.vivo = false;
    p.nodo.classList.remove('viva','llama','abierto','visto');
  });
  Object.keys(vistos).forEach(k=>delete vistos[k]);
  ORBES.forEach(n=>{
    n.suelto = false;
    n.orbe.classList.remove('viva','abierto');
    n.cable.classList.remove('viva');
  });
  marcarProgreso();
  malla.querySelectorAll('.prende').forEach(n=>n.classList.remove('prende'));
  escena.style.transform = '';
}
document.getElementById('logo').addEventListener('click', reiniciar);
document.getElementById('remapa').addEventListener('click', reiniciar);

tacto.addEventListener('click', ()=>{ if(cuerpo.classList.contains('cierre')) reiniciar(); });

window.addEventListener('resize', ()=>{ sitio = null; ubicar(); });
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') cerrar(); });

function rico(s){ return esc(s).replace(/\*([^*]+)\*/g, '<b class="dest">$1</b>'); }
function esc(s){
  return String(s).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
}

})();
