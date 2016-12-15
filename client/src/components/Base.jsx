import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

const Base  = ({
    children
}) => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <IndexLink to="/">React应用</IndexLink>
            </div>

            <div className="top-bar-right">
                <Link to="/login">登录</Link>
                <Link to="/singup">注册</Link>
            </div>
        </div>
        {children}
    </div>
);
Base.propTypes = {
    children: PropTypes.object.isRequired
}
export default Base;