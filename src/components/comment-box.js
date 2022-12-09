import React from 'react';
import CommentForm from './comment-form';
import CommentItem from './comment-item';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments : [],
            author: '', 
            comment: ''
        };

        this.deleteComment = this.deleteComment.bind(this);
        this.onAuthorChange = this.onAuthorChange.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    // перед рендерингом загружаем комментарии из localstorage
    componentWillMount() {        
        localStorage.getItem('comments') && this.setState({
            comments: JSON.parse(localStorage.getItem('comments'))
        });
    } 

    // удаление комментария
    deleteComment(id) {
        const updateList = this.state.comments.filter(item => item.id !== id);

        localStorage.setItem('comments', JSON.stringify(updateList));
        this.setState({
            comments: updateList
        })
    }

    // генерируем id комментария
    getIdComment() {
        const ms = new Date();
        return ms.getTime();
    }

    // дата и время комментария
    getDateComment() {
        var m = new Date();
        const date = `${m.getDate()}.${m.getMonth()}.${m.getFullYear()}`;
        const time = `${m.getHours()}:${m.getMinutes()}:${m.getSeconds()}`;
        const dateTime = `${date} ${time}`;

        return dateTime;
    }    

    // изменение поля автор
    onAuthorChange(event) {
        this.setState({
            author: event.target.value
        });
    }

    // изменение поля комментарий
    onCommentChange(event){
        this.setState({
            comment: event.target.value
        });
    } 

    // валидация полей ввода 
    validateInput(str) {
        if(str.match(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig)) {
            return false;
        } 
        return true;        
    }

    // добавление комментария, событие отправки формы
    addComment(event) {
        event.preventDefault();
        const authorVal = this.state.author.trim();
        const commentVal = this.state.comment.trim();
        
        // проверяем на заполненность полей автор комментарий
        if(authorVal && commentVal) {
            if(this.validateInput(authorVal) && this.validateInput(commentVal)) {
                const currentComments = this.state.comments;
                const newComment = {
                    id : this.getIdComment(),
                    author : authorVal, 
                    comment: commentVal,
                    date: this.getDateComment() 
                }

                currentComments.unshift(newComment)
                localStorage.setItem('comments', JSON.stringify(currentComments));

                this.setState({
                    comments: currentComments,
                    author: '', 
                    comment: ''
                })   
            } else {
                alert('Поля содержат недопустимые символы');
                
            }     
        } else {
            alert('Поле является обязательным! Вы ввели пустое значение');
            
        }       		
    }

    render() {        
        const data = this.state.comments;
        let newsTemplate;
        
        if(data.length) {
            newsTemplate = data.map( (item) => {
                return (
                    <CommentItem 
                        id={item.id}
                        author={item.author}
                        comment={item.comment}
                        date={item.date} 
                        deleteComment={this.deleteComment}
                    />
                )
            })
        } else {
            newsTemplate = <p>Комментариев нет</p>
        }
        
        return (
            <div className="comment-box">
                <CommentForm                     
                    addComment={this.addComment}
                    onAuthorChange={this.onAuthorChange}
                    onCommentChange={this.onCommentChange}
                    author={this.state.author}
                    comment={this.state.comment}
                />
                <hr/> 
                <h3>Все комментарии:</h3>   
                <ol>             
                    {newsTemplate}
                </ol>                          
            </div>
        )            
    }
}

export default CommentBox;