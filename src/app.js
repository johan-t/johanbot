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
    "Johan schreibt man mit einem N.",
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
        this.tell("Du kannst mich fragen, wer Johan ist, oder nach einem zufälligem Fakt über ihn fragen.")

    },

    Werbichintent() {
        this.tell("Johan Trieloff ist ein 14 Jähriger Junge, der seit zwei Jahren das Bertha von Suttner Gymnasium besucht und auf der Suche nach einer Praktikumsstelle für sein Betriebspraktikum vom elften November 2019 bis zum zweiundzwanzigsten November 2019 ist.")
    },

    zufaelligefaktenintent() {
        var ri = Math.floor(Math.random() * facts.length);
        this.tell(facts[ri])
    }

});

module.exports.app = app;
