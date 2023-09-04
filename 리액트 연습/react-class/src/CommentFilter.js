import React, {Component} from "react";

class CommentFilter extends Component{
    state = {
        comment: this.props.comment.split(' '),
        insults: ['바보', '똥개', '그지', '임마', '새끼', '죽을', '콱', '씨']
    }
    filterComment = () => {
        const {insults} = this.state

        const commentChange = this.state.comment.filter((word) => {
            return !insults.some((insult) => word.includes(insult))
        })

        console.log(commentChange)
        this.setState({comment: commentChange})
    }
    componentDidMount(){
        this.filterComment()
    }
    render(){
        const {comment} = this.state

        return(
            <>
                <h2>{comment.join(' ')}</h2>
            </>
        )
    }
}
export default CommentFilter