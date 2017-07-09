var prompt = require('prompt-sync')();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

//read config file with credentials
var config = require('./config');

if(config.username == "" || config.password == ""){
  console.error("ATENÇÃO!! usuário, senha ou workspace_id em branco. Verifique o arquivo config.js");
}
// Set up Conversation service.
var conversation = new ConversationV1({
  username: config.username, // replace with username from service key
  password: config.password, // replace with password from service key
  path: { workspace_id: config.workspace_id }, // replace with workspace ID
  version_date: '2017-05-26'
});

// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  // Check for action flags.
  if (response.output.action === 'display_time') {
    // User asked what time it is, so we output the local system time.
    console.log('São ' + new Date().toLocaleTimeString());
  }  else {
    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }
  }

  var newMessageFromUser = prompt('>> ');
  conversation.message({
    input: { text: newMessageFromUser },
    // Send back the context to maintain state.
    context : response.context,
  }, processResponse)

}
