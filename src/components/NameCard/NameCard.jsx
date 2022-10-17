import React from "react";
import './NameCard.css';

const nameCheapUrl = `https://www.namecheap.com/domains/registration/results/?domain=`;

const NameCard = ({ suggestedName }) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className="card-link" href={`${nameCheapUrl}${suggestedName}`}>
            <div className="result-name-card" data-testid="test-div">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;