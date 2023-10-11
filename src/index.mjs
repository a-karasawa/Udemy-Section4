/**
 * const,let
 */

//  var val1 = "var変数";
//   console.log(val1);

//   //var変数は上書き可能
//   val1 = "var変数を上書き";
//   console.log(val1);

//   //var変数を再宣言
//   var val1 = "var変数を再宣言";
//   console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数"
// console.log(val3);

// //const変数は上書き不可
// //val3 = "const変数を上書き"

// //constは再宣言不可
// const val3 = "const変数の再宣言"

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name : "川田",
//   age : 40
// }
// val4.name = "横山";
// val4.address = "栗東";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 =['dog','cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "福永";
// const age = 48;
// //私の名前はXXXです。年齢は99歳です。

// //従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age +"歳です。";
// console.log(message);

// //テンプレート文字列を用いる方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 * なんでアロー関数を使うのか？
 */

 //従来の方法
//  function func1(str){
//    return str;
//  }
//  const func1 = function(str){
//    return str;
//  };
//  console.log(func1("func1です"));

//  //アロー関数
//  const func2 = (str) => {
//    return str;
//  };
//  console.log(func2("func2です"));

//  const func3 = (num1,num2) => {
//    return num1 + num2;
//  }
//  console.log(func3(1,5));

/**
 * 分割代入
 * たくさんあったらどうするか？
 */
// const myProfile ={
//   name:"池添",
//   age:43
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name , age } =myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile = ['松山',30];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name ,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

/**
 * デフォルト値
 */
const sayHallo = (name = "ゲスト") => console.log(`こんにちは${name}さん。`);
sayHallo("松岡");







