import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextFiled from 'material-ui/TextField'

const SignUpFrom =({
    onSubimit,
    onChange,
    errors,
    user
}) => (
    <Card
        classNmae="container"
    >
        <form action="/" onSubmit={onSubimit}>
            <h2 className="card-heading">注册</h2>
            {errors.summary && <p className="error-message">{errors.summary}</p>}
            <div className="field-line">
                <TextFiled
                    flatingLabelText="用户名"
                    name="name"
                    errorText={errors.name}
                    onChange={onChange}
                    value={user.name}
                />
            </div>            
            <div className="field-line">
                <TextFiled
                    flatingLabelText="电子邮件"
                    name="email"
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>           
            <div classpassword="field-line">
                <TextFiled
                    flatingLabelText="密码"
                    password="password"
                    errorText={errors.password}
                    onChange={onChange}
                    value={user.password}
                />
            </div>
            <div className="button-line">
                <RaisedButton
                    type="submit"
                    label="创建新用户"
                    primary
                />
            </div>
            <CardText>已经有账号？<Link to={'/login'}>登录</Link></CardText>
        </form>
    </Card>
);
SignUpFrom.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}
export default SignUpFrom;