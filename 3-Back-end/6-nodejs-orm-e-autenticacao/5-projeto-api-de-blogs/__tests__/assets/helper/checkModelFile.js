const fs = require('fs');
const { basename } = require('path')

const checkModelFile = modelPath => {
  it(`Será validado que existe o arquivo '${basename(modelPath)}'`, () => {
    const fileExists = fs.existsSync(modelPath);
  
    expect(fileExists).toEqual(true);
  })
}

module.exports = checkModelFile
