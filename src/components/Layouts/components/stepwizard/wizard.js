import React, { Fragment, useState, useEffect } from 'react';
import StepWizard from 'react-step-wizard';

import Nav from './nav';
import Plugs from './Plugs';

import styles from './wizard.less';
import transitions from './transitions.less';
import Cookies from 'js-cookie';

import axios  from 'axios';
// axios.defaults.withCredentials = true;


/* eslint react/prop-types: 0 */

/**
 * A basic demonstration of how to use the step wizard
 */
const Wizard = () => {
    var [state, updateState] = useState({
        form: {},
        stepOne:{},
        stepTwo:{},
        transitions: {
            enterRight: `${transitions.animated} ${transitions.enterRight}`,
            enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
            exitRight: `${transitions.animated} ${transitions.exitRight}`,
            exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
            intro: `${transitions.animated} ${transitions.intro}`,
        },
        demo: true, // uncomment to see more
    });

    const updateForm = (key, value) => {
        const { form } = state;

        form[key] = value;
        updateState({
            ...state,
            form,
        });
    };
    const updateStepOneError = (value) => {
        const { stepOne } = state;

        stepOne['error'] = value;
        updateState({
            ...state,
            stepOne,
        });
    };
    const updateStepTwoError = (value) => {
        const { stepTwo } = state;

        stepTwo['error'] = value;
        updateState({
            ...state,
            stepTwo,
        });
    };

    // Do something on step change
    const onStepChange = (stats) => {
        // console.log(stats);
    };

    const setInstance = SW => updateState({
        ...state,
        SW,
    });

    const { SW, demo } = state;

    return (
        <div className='container'>
            <div className={'jumbotron'}>
                <div className='row'>
                    <div className={`col-12 col-sm-10 offset-sm-1 my-5 ${styles['rsw-wrapper']}`}>
                        <StepWizard
                            onStepChange={onStepChange}
                            isHashEnabled
                            transitions={state.transitions} // comment out for default transitions
                            // nav={<Nav />}
                            instance={setInstance}
                        >
                            <First hashKey={'FirstStep'} update={updateForm} error={state.stepOne}/>
                            <Progress stepName='progress' updateForm={updateForm}  form={state.form} update={updateStepOneError} />
                            <Second form={state.form} update={updateForm} error={state.stepTwo}/>
                            <Progress2 stepName='progress'  form={state.form} update={updateStepTwoError} />
                            <Third hashKey={'TheEnd'} />
                        </StepWizard>
                    </div>
                </div>
            </div>
            {/* { (demo && SW) && <InstanceDemo SW={SW} /> } */}
        </div>
    );
};

export default Wizard;

/** Demo of using instance */
// const InstanceDemo = ({ SW }) => (
//     <Fragment>
//         <h4>Control from outside component</h4>
//         <button className={'btn btn-secondary'} onClick={SW.previousStep}>Previous Step</button>
//         &nbsp;
//         <button className={'btn btn-secondary'} onClick={SW.nextStep}>Next Step</button>
//         &nbsp;
//         <button className={'btn btn-secondary'} onClick={() => SW.goToNamedStep('progress')}>Go to 'progress'</button>
//     </Fragment>
// );

/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
const Stats = ({
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
    step,
}) => (
    <div>
        <br />
        { step > 1 &&
            <button className='btn btn-default btn-block' onClick={previousStep}>Go Back</button>
        }
        { step < totalSteps ?
            <button className='btn btn-primary btn-block' onClick={nextStep}>Continue</button>
            :
            <button className='btn btn-success btn-block' onClick={nextStep}>Finish</button>
        }
        <br />
        {/* <div style={{ fontSize: '21px', fontWeight: '200' }}>
            <h4>Other Functions</h4>
            <div>Current Step: {currentStep}</div>
            <div>Total Steps: {totalSteps}</div>
            <button className='btn btn-block btn-default' onClick={firstStep}>First Step</button>
            <button className='btn btn-block btn-default' onClick={lastStep}>Last Step</button>
            <button className='btn btn-block btn-default' onClick={() => goToStep(2)}>Go to Step 2</button>
        </div> */}
    </div>
);

/** Steps */

const First = props => {
    const update = (e) => {
        props.update(e.target.name, e.target.value);
    };

    

    console.log(props.error.error)

    return (
        <div>

            <label className='mb-4'>Enter your email address</label>
            
            
            <input id="validationServer03" type='text' className={'form-control '+(props.error.error  ? 'is-invalid':'')} name='email' placeholder='example@mail.com'
                onChange={update} required aria-describedby="validationServerFeedback" />
            <div id="validationServerFeedback" className="invalid-feedback">
                {props.error.error}
            </div>  
            <Stats step={1} {...props} />
        </div>
    );
};

const Second = props => {
    const update = (e) => {
        props.update(e.target.name, e.target.value);
    };
    console.log(props.error.error)

    return (
        <div>


            <label className='mb-4'>Please enter your verification code</label>
            
            
            <input style={{width:"20%"}} id="validationServer03" type='text' className={'form-control '+(props.error.error  ? 'is-invalid':'')} name='vfc'
                onChange={update} required aria-describedby="validationServerFeedback" />
            <div id="validationServerFeedback" className="invalid-feedback">
                {props.error.error}
            </div>  

            <Stats step={2} {...props} />
        </div>
    );
};



const Progress = (props) => {
    const update = (val) => {
        props.update(val);
    };

    const [state, updateState] = useState({
        isActiveClass: '',
        timeout: null,
        message:"Email validation in progress"
    });

    useEffect(() => {
        const { timeout } = state;

        if (props.isActive && !timeout) {
            axios.get(`http://10.100.18.13:1020/api/Email/VerifyEmail`,{headers:{'verifyEmail':props.form.email}})
            .then(res => {
                if(res.data.responseCode == 200){
                    props.updateForm("id",res.data.data.id)
                    updateState({
                        message:"Email validated succesfully",
                        isActiveClass: styles.loaded,
                        timeout: setTimeout(() => {
                            props.nextStep();
                        }, 1500),
                    });
                }else{
                    update(res.data.message)
                    // props.update(stepone.error, res.message);
                    updateState({
                        message:"Email validation in progress",
                        isActiveClass: styles.loaded,
                        timeout: setTimeout(() => {
                            props.previousStep();
                        }, 500),
                    });
                }
                console.log(res);
                console.log(res.data);
            })
        } else if (!props.isActive && timeout) {
            clearTimeout(timeout);
            updateState({
                message:"Email validation in progress",
                isActiveClass: '',
                timeout: null,
            });
        }
    });

    return (
        <div className={styles['progress-wrapper']}>
            <p className='text-center'>{state.message}</p>
            <div className={`${styles.progress} ${state.isActiveClass}`}>
                <div className={`${styles['progress-bar']} progress-bar-striped`} />
            </div>
        </div>
    );
};


const Progress2 = (props) => {
    const update = (val) => {
        props.update(val);
    };
    console.log("HEREEE")
    console.log(props.form)
    const [state, updateState] = useState({
        isActiveClass: '',
        timeout: null,
        message:"Email verification in progress"
    });

    useEffect(() => {
        const { timeout } = state;

        if (props.isActive && !timeout) {
            axios.post(`http://10.100.18.13:1020/api/Email/VerifyCode`,{id: props.form.id, code: props.form.vfc})
            .then(res => {
                if(res.data.responseCode == 200){
                    Cookies.set('Authorization', "Bearer " + res.data.value.response.token, { expires: 100 });
                    Cookies.set('refreshToken', res.data.value.response.refreshToken, { expires: 100 });
                    Cookies.set('displayName', res.data.value.response.displayName, { expires: 100 });

                    updateState({
                        message:"Email verified succesfully",
                        isActiveClass: styles.loaded,
                        timeout: setTimeout(() => {
                            props.nextStep();
                        }, 1500),
                    });
                }else{
                    update(res.data.message)
                    // props.update(stepone.error, res.message);
                    updateState({
                        message:"Email verification in progress",
                        isActiveClass: styles.loaded,
                        timeout: setTimeout(() => {
                            props.previousStep();
                        }, 500),
                    });
                }
                console.log(res);
                console.log(res.data);
            })
        } else if (!props.isActive && timeout) {
            clearTimeout(timeout);
            updateState({
                message:"Email verification in progress",
                isActiveClass: '',
                timeout: null,
            });
        }
    });

    return (
        <div className={styles['progress-wrapper']}>
            <p className='text-center'>{state.message}</p>
            <div className={`${styles.progress} ${state.isActiveClass}`}>
                <div className={`${styles['progress-bar']} progress-bar-striped`} />
            </div>
        </div>
    );
};
const Third = (props) => {
    const submit = () => {
        axios.get(`http://10.100.18.13:1020/api/Email/GetData`, {headers:{
            "Authorization": Cookies.get("Authorization")
        }})
        .then(res => {
            console.log(res)
        })
    };

    return (
        <div>
            <div className={'text-center'}>
                <h3>HELLO {Cookies.get('displayName')} This is the last step in this example!</h3>
                <hr />
                <Plugs />
            </div>
            <Stats step={4} {...props} nextStep={submit} />
        </div>
    );
};
