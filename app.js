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

var facts = [
    "Johan kann JavaScript",
    "Er beherscht Python",
    "Johan kann sehr gut Englisch",
    "Er ist Klassensprecher seid der ersten Klasse",
    "Johan ist nett",
    "Johan ist Teamfähig",
    "Er ließt sehr gerne Bücher"
    
]

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        this.$speech.addText('Willst du über Johan lernen?');
        this.$reprompt.addText('Bitte antworte mit Ja oder Nein.');
    },

    END() {
        this.tell('See ya later, alligator!')
    },

    helpintent() {
        this.tell("Du kannst mich fragen Wer Johan ist und nach einem zufälligem Fakt über ihn fragen")

    },

    Werbinichintent() {
        this.tell("Johan Trieloff ist ein 14 Jähriger junge der seid zwei Jahren das Bertha von Suttner Gymnasium besucht und auf der suche nach einer Praktikums stelle für sein Betriebspraktikum vom elften elften zweitausendneunzehn bis zum zweiundzwanzigsten elften zweitausendneunzehn.")
    },

    zufaelligerfaktintent() {
        var ri = math.floor(math.radom() * facts.lenght);
        this.tell(facts[ri])
    }


});

module.exports.app = app;
