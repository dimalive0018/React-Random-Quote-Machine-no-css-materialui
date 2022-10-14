import React from "react";
import { Button, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Machine = ({theQuote, theIndex}) => (
    <Card>
        <CardContent>
                    <Typography id="text">
                        {theQuote.quote} - <span id="author">{theQuote.author}</span>
                    </Typography>
        </CardContent>
        <CardActions>
            <Button id="new-quote" size='medium' variant="container" onClick={theIndex}>Quote</Button>
            <IconButton id="tweet-quote" target='_blank' href={encodeURI(`https://twitter.com/intent/tweet?text=${theQuote.quote}&hashtags=${theQuote.author}`)}>
                <FontAwesomeIcon icon={faTwitter} size='1x'></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
)

export default Machine;