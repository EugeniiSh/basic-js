const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) 
  {
      this.direction = direction === false? false:true;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined)
    {
      throw TypeError('Incorrect arguments!')
    }

    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		
        
    let result = '';
    let ratio = 0; //корректировочный коэффициент при отсутствии символа в алфавите.
    let i = 0; //Дополнительный счётчик
    // const maxLength = Math.max(message.length, key.length);
    const maxLength = message.length;

    for(let w = 0; w < maxLength; w++)
    {
      i = w - ratio;

      // Подгогнка ключа\сообщения под maxLegth и получение текущего символа
      const currentMessageWord = message[((w >= message.length) ? w % message.length : w )].toUpperCase();
      const currentKeyWord = key[((i >= key.length) ? i % key.length : i )].toUpperCase();
      //Обработка не алфавитных символов
      if(abc.indexOf(currentMessageWord) === -1)
      {
        result += currentMessageWord;
        ratio++;
        continue;
      }
      
      //Получение индекса буквы.
      const m_Index = abc.indexOf(currentMessageWord)
      const k_Index = abc.indexOf(currentKeyWord)
      //Получение зашифрованной буквы.
      const c_Word = abc[((abc.length + (m_Index + k_Index)) % abc.length)];
      
      result += c_Word;
    }
    
    if(this.direction === false)
    {
      result = result.split('').reverse().join(''); 
    }
    
    return result;
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined)
    {
      throw TypeError('Incorrect arguments!')
    }

    const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";		
        
    let result = '';
    let ratio = 0; //корректировочный коэффициент при отсутствии символа в алфавите.
    let i = 0; //Дополнительный счётчик
    // const maxLength = Math.max(message.length, key.length);
    const maxLength = message.length;

    for(let w = 0; w < maxLength; w++)
    {
      i = w - ratio;

      // Подгогнка ключа\сообщения под maxLegth и получение текущего символа
      const currentMessageWord = message[((w >= message.length) ? w % message.length : w )].toUpperCase();
      const currentKeyWord = key[((i >= key.length) ? i % key.length : i )].toUpperCase();
      //Обработка не алфавитных символов
      if(abc.indexOf(currentMessageWord) === -1)
      {
        result += currentMessageWord;
        ratio++;
        continue;
      }
      
      //Получение индекса буквы.
      const m_Index = abc.indexOf(currentMessageWord)
      const k_Index = -abc.indexOf(currentKeyWord)
      //Получение зашифрованной буквы.
      const c_Word = abc[((abc.length + (m_Index + k_Index)) % abc.length)];
      
      result += c_Word;
    }
    
    if(this.direction === false)
    {
      result = result.split('').reverse().join(''); 
    }
    
    return result;
  }
}
// https://www.youtube.com/watch?v=KST4bGAH-8Y
module.exports = {
  VigenereCipheringMachine
};
