import React from 'react';
import CommentBox from './comment-box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './style.css';

class CommentList extends React.Component {

    render() {
        return (		
            
            <Card>
        <CardContent>
            <div className="comments-list">  
                <CommentBox/> 
                  
            </div>
            
        </CardContent>
        </Card>
        )
    }  
}

export default CommentList;


