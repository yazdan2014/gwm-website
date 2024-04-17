import React, { Fragment, useState, useEffect } from 'react';
import StepWizard from 'react-step-wizard';

import Nav from './nav';
import Plugs from './Plugs';

import styles from './wizard.less';
import transitions from './transitions.less';
import Cookies from 'js-cookie';
import OtpInput from 'react-otp-input';

import { Button,ButtonGroup, Divider, Text, Image, Stack, Heading ,Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import axios  from 'axios';
import { Container } from 'react-bootstrap';
import { Row ,Col} from 'react-bootstrap';
// axios.defaults.withCredentials = true;



/**
 * A basic demonstration of how to use the step wizard
 */
const Wizard = () => {
    var [state, updateState] = useState({
        form: {},
        stepOne:{},
        stepTwo:{},
        products:{},
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

    const updateProducts = (value)=>{
        const { products } = state;

        products['products'] = value;
        updateState({
            ...state,
            products,
        });
    }

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
                            <Progress2 hashKey='progress2'  form={state.form} update={updateStepTwoError} updateProducts={updateProducts}/>
                            <Third hashKey={'step3'} products={state.products} updateProducts={updateProducts}/>
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
    
    useEffect(()=>{
        console.log(Cookies.get('Authorization'))
        if(Cookies.get('Authorization') ){
            console.log("AREEMIAD")
            props.goToStep("step3")
        }
        
    }, [])

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
    const [otp, setOtp] = useState('');
    const update = (e) => {
        setOtp(e)
        props.update("vfc", e);
    };
    console.log(props.error.error)

    return (
        <div>


            <label className='mb-4'>Please enter your verification code</label>
            
            {/* <input style={{width:"20%"}} id="validationServer03" type='text' className={'form-control '+(props.error.error  ? 'is-invalid':'')} name='vfc'
                onChange={update} required aria-describedby="validationServerFeedback" /> */}
            <OtpInput
                aria-describedby="verificationserverfeedback"
                value={otp}
                onChange={update}
                numInputs={5}
                renderSeparator={<span> </span>}
                inputStyle={{width:"50px",width:"50px"}}
                renderInput={(props) => <input   class={"m-2 text-center form-control rounded "+(props.error  ? 'is-invalid':'')}   {...props} />}
            />

            <div id="mx-2 verificationserverfeedback" className='text-danger'>
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
    const updateProducts = (val)=>{
        props.updateProducts(val)
    }
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
            if(Cookies.get("Authorization")){
                axios.get(`http://10.100.18.13:1020/api/Product/GetAllProducts`, {headers:{
                    "Authorization": Cookies.get("Authorization")
                }})
                .then(res => {
                    updateProducts(res.data.data.res)
                    updateState({
                        message:"Email verified succesfully",
                        isActiveClass: styles.loaded,
                        timeout: setTimeout(() => {
                            props.nextStep();
                        }, 1500),
                    });
                })        
            }else{
                axios.post(`http://10.100.18.13:1020/api/Email/VerifyCode`,{id: props.form.id, code: props.form.vfc})
                .then(res => {
                    if(res.data.responseCode == 200){
                        Cookies.set('Authorization', "Bearer " + res.data.value.response.token, { expires: 100 });
                        Cookies.set('refreshToken', res.data.value.response.refreshToken, { expires: 100 });
                        Cookies.set('displayName', res.data.value.response.displayName, { expires: 100 });

                        

                        axios.get(`http://10.100.18.13:1020/api/Product/GetAllProducts`, {headers:{
                            "Authorization": Cookies.get("Authorization")
                        }})
                        .then(res => {
                            updateProducts(res.data.data.res)
                            updateState({
                                message:"Email verified succesfully",
                                isActiveClass: styles.loaded,
                                timeout: setTimeout(() => {
                                    props.nextStep();
                                }, 1500),
                            });
                        })                        
                    }else{
                        console.log(res.data.message)
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
            }
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
        
    };
    const [listProducts, updateProducts] = useState()
    useEffect(()=>{
        if(!props.products['products']){
            props.goToStep("progress2")
            return
        }else{
            let new_list = props.products.products.map((product)=>{
                console.log(product)
                return (<div>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                objectFit='cover'
                                boxSize='200px'
                                src={product.photo}
                                alt='Green double couch with wooden legs'
                                borderRadius='md'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading  size='md'>{product.title}</Heading>
                                <Text >
                                    sexy sax man
                                    {product.inventory} available
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                {/* <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                                </ButtonGroup> */}
                            </CardFooter>
                        </Card></div>)
                    })
                    
            updateProducts(new_list)
        }
    },[props.products['products']])
    return (
        <div>
            <Container>
                <Row className='px-5'>
                    <OwlCarousel  loop dots={false} center={true} items={3} >
                            {listProducts}
                    </OwlCarousel>
                </Row>
            </Container>

            <Stats step={3} {...props} nextStep={submit} />
        </div>
    );
};
