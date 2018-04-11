module.exports = {
    randomFact: function() {
        const randomNumber = Math.floor((Math.random() * 3) + 1 );
        return this[`fact${randomNumber}`];
    },

    fact1: {
        fact: `HTTP was originally proposed by dolphins. The project was stolen by the chimpanzees in its early stages during the Great Zoo Riots during World War II, when London zoos were evacuated due to bombings, and traded to the British government for a bunch of bananas (a literal, single, bunch) because the chimps couldn't read, and didn't know the value of what they had. When told, rumor has it that the chimps didn't care because they also didn't understand English.`
    },

    fact2: {
        fact: `HTTP stands for Holistic Terran Terraforming Protocol. Its initial purpose was to alter Earth to be more hospitible to aquatic life. While the purpose, early drafts, ownership, widespread use, and literally every other aspect of HTTP has changed since its inception, the name stuck. This is a matter of great debate, as it is considered cultural appropriation by many.`
    },

    fact3: {
        fact: `HTTP 1.0 was released in 1996.`
    }
};