import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = blogData
    return (
      <Link to={`/blogs/${id}`} className="item-link">
        <li className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="item-image" />
          <div className="details-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img
                src={avatarUrl}
                alt={`avatar${id}`}
                className="item-avatar"
              />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
