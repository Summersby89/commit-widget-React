import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CommentItem = (props) => {

    return ( 
        <Card>
        <CardContent>
        <li  id={props.id}>  
            
            <Typography color="textSecondary" gutterBottom> Автор: </Typography>
            <Typography variant="body2" component="p"> {props.author} </Typography> 
             <Typography color="textSecondary" gutterBottom> Комментарий: </Typography>
             <Typography variant="body2" component="p"> {props.comment} </Typography> 
             <Typography color="textSecondary" gutterBottom> Дата: </Typography> 
             <Typography variant="body2" component="p"> {props.date} </Typography> 
            
            <IconButton 
                aria-label="delete"
                className="js-delete-comment" 
                title="удалить" 
                onClick={
                    () => {
                        props.deleteComment(props.id)
                    }
                }
            >
          <DeleteIcon fontSize="large" />
        </IconButton>
        
        </li>
        </CardContent>
        </Card>
    )
}

export default CommentItem;