function analyze() {
  const phpCode = document.getElementById('phpCode').value;
  const tokens = [];
  
  // Tokenize the PHP code using regular expressions
  const regex = /\b(if|else|while|for|echo|int|string|bool)\b|\+|-|\*|\/|=|==|!=|<|>|<=|>=|\(|\)|\{|\}|\[|\]|;/g;
  let match;

  while ((match = regex.exec(phpCode)) !== null) {
      tokens.push({ value: match[0], type: getTokenType(match[0]) });
  }

  // Display the results
  displayResults(tokens);
}

function getTokenType(token) {
  const keywords = ['if', 'else', 'while', 'for', 'echo', 'int', 'string', 'bool'];
  const operators = ['+', '-', '*', '/', '=', '==', '!=', '<', '>', '<=', '>='];
  const brackets = ['(', ')', '{', '}', '[', ']'];
  const semicolon = ';';

  if (keywords.includes(token)) {
      return 'Keyword';
  } else if (operators.includes(token)) {
      return 'Operator';
  } else if (brackets.includes(token)) {
      return 'Bracket';
  } else if (token === semicolon) {
      return 'Semicolon';
  } else if (!isNaN(token)) {
      return 'Number';
  } else {
      return 'Identifier';
  }
}

function displayResults(tokens) {
  const resultDiv = document.getElementById('result');
  let output = '<table>';
  
  output += '<tr><th>Token</th><th>Type Data</th></tr>';

  tokens.forEach(token => {
      output += `<tr><td>${token.value}</td><td>${token.type}</td></tr>`;
  });

  output += '</table>';
  resultDiv.innerHTML = output;
}

