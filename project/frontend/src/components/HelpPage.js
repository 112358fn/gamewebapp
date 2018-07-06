import React from 'react';

const HelpPage = () => (
    <div className='container'>
    <h3>Task:</h3>
    <h4>Build a bottle-rocket!</h4>
    <ul>
        <li>The rocket should fly as far as possible, transfer a raw egg and land with the raw egg intact.</li>
        <li>If the egg brakes during landing then the distance is <strong>NOT</strong> computed.</li> 
        <li>Make a team-flag, and tag it with your team name. Use the BBQ-stick for the flag <strong>ONLY</strong>.</li>
        <li>Keep in mind that looks is everything</li>
        <li>Feel free to use office material from the printer room for your creation </li>
    </ul>
    <h3>Extra:</h3>
    <h4>Win some badges</h4>
    <ul className="fa-ul">
    <li><i className="fa-li fas fa-plane-arrival fa-fw fa-lg"></i>Perfect Landing: Egg in perfect conditions</li>
    <li><i className="fa-li fas fa-money-bill-wave fa-fw fa-lg"></i>Excellent Bribery: Be creative</li>
    <li><i className="fa-li fas fa-music fa-fw fa-lg"></i>Awesome Musical Skills: Dance or sing</li>
    <li><i className="fa-li fas fa-flag fa-fw fa-lg"></i>Terrific Flag Design</li>
    </ul>
    <i class="fas fa-trophy fa-3x fa-pull-left" aria-hidden="true"></i>...and for the winner: <strong>Best in Show!</strong>
    </div>
);

export default HelpPage