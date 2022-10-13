import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
//import { faUser, faLock, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Login = () => (
    <div className='login-segment'>
        <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form>
                        <Form.Input
                            icon={<faUser />}
                            iconPosition='left'
                            label='Username'
                            placeholder='Username'
                        />
                        <Form.Input
                            icon={<faLock />}
                            iconPosition='left'
                            label='Password'
                            type='password'
                        />

                        <Button content='Login' primary />
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Button content='Sign up' icon={<faArrowRightToBracket />} size='big' />
                </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
        </Segment>
    </div>
)

export default Login