import React from 'react';

const HelpPage = () => (
    <div className='container'>
    <br/>
    <div class="alert alert-warning"><strong>Heads up!</strong> This ain't rocket science</div>
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
    <ul className="list-unstyled">
    <li><i className="fas fa-plane-arrival fa-fw fa-lg"></i> Perfect Landing: Egg in perfect conditions</li>
    <li><i className="fas fa-money-bill-wave fa-fw fa-lg"></i> Excellent Bribery: Be creative</li>
    <li><i className="fas fa-music fa-fw fa-lg"></i> Awesome Musical Skills: Dance or sing</li>
    <li><i className="fas fa-flag fa-fw fa-lg"></i> Terrific Flag Design</li>
    <li><i className="fas fa-trophy fa-fw fa-2x color-winner"></i>...and for the winner: <strong>Best in Show!</strong> <i className="fas fa-trophy fa-fw fa-2x color-winner"></i></li>
    </ul>
    <br/>
    <div className="well well-sm text-center">Made with <i className="fas fa-heart fa-fw fa-sm"></i> from Göteborg</div>
    </div>
);

export default HelpPage