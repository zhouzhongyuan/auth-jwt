import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const LoginFrom = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <Card className="container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">登录</h2>
            {errors.summary &&  <p className="error-message">{errors.summary}</p> }
            <div className="field-line">
                <TextField
                    floatingLabelText="电子邮件"
                    name="email"
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="密码"
                    type="password"
                    name="password"
                    errorText={errors.password}
                    onChange={onChange}
                    value={user.password}
                />
            </div>
            <div className="button-line">
                <RaisedButton type="submit" label="登录" />
            </div>
            <CardText>没有账号？<Link to={'/signup'}>创建</Link></CardText>
        </form>
    </Card>
);
LoginFrom.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}
export  default LoginFrom;