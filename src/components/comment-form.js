import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';


  
class CommentForm extends React.Component { 
    constructor(props) {
        super(props);
    } 

    render() {        
      return (
        <form onSubmit={
                (e) => { 
                    this.props.addComment(e); 
                }
            }
        >
        <h1 className="main-heading">Оставьте комментарий:</h1>
            <div>
                        
                <TextField 
                    id="outlined-basic" 
                    label="Ваше имя" 
                    variant="outlined"     
                    value={this.props.author}
                    onChange={(e) => { 
                    this.props.onAuthorChange(e);
                }}                    
            />
            </div>
                    
            <div>
                <TextField 
                    id="outlined-basic" 
                    label="Комментарий" 
                    variant="outlined" 
                    type="text" 
                    name="comment" 
                    value={this.props.comment}
                    onChange={(e) => {
                    this.props.onCommentChange(e)
                }}                  
            />    
            </div> 
            
            <div className="btn-wrapper">
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    endIcon={<SendIcon/>}>Добавить</Button>
            </div>
        </form>
    
        );
    }
}

export default CommentForm;