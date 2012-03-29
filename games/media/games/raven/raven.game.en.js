// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "17479914-8c99-4983-885c-ed2254ed8aaa";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "0.5"

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>A Blank, bleak, room</h1>\
        <p>You wake up in a small, bleak room. The room is sparsely furnished.\
        The white, blank walls stare at you, emotionless.\
        </p>\
        \
        <p class='transient'>Maybe you <a href= 'room'>should get up</a>."
    ),
    
    room: new undum.SimpleSituation(
    	"<h1>Your room</h1>\
    	<p>You get up. You feel as unemotional and robotic as the walls that \
    	surround you. There is a message blinking on the terminal.</p>\
    	\
    	<p class='transient'> You can either <a href= 'check-message'> check that \
    	message</a> or <a href= 'endgame'> or not....</a>"
    	),
    	
    	
    checkmessage: new undum.SimpleSituation(
    	"<h1>Your room</h1>\
    	<p>You check the message. It is a message from the medical unit. You are \
    	scheduled to appear in front of the medical board at 8.</p>"
    	),
    	
    	
    endgame: new undum.SimpleSituation(
    	"<h1>Your room</h1>\
    	<p>You decide not to check the message. Very soon, your room fills witha heavier gas.\
    	You fall into a deep sleep, never to awaken again.</p>"
    	),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
