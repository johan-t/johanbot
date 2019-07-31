'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);

const facts = [
    'Johan is cool',
    'Johan is nice',
    'Johan knows JavaScript'
]

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        this.$speech.addText('Do you want to learn about Johan?');
        this.$reprompt.addText('Please answer with yes or no.');

        this.followUpState('FactState')
            .ask(this.$speech, this.$reprompt);
    },

    HelloWorldIntent() {
        this.ask('Hallo ich bin Alexa', 'Please tell me your name.');
    },

    MyNameIsIntent() {
        this.tell('Hey ' + this.$inputs.name.value + ', great to meet you!');
    },

    MoreIntent() {
        this.ask('Do you want to know more?');
    },

    FactIntent() {
        this.tell(facts[Math.floor(Math.random()*facts.length)]);
        this.toIntent('MoreIntent');
    },

    FactState: {

        YesIntent() {
           this.tell(facts[Math.floor(Math.random()*facts.length)]);
        },

        NoIntent() {
           this.toIntent('END')
        },
    },

    END() {
        this.tell('See ya later, alligator!')
    }

});

module.exports.app = app;
