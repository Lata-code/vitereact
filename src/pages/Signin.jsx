import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/Auth"
import { toast } from "react-toastify"

export  const Signin = ()=>{
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const Navigate = useNavigate()
    const {storeTokenInLocalStorage} = useAuth();

    const handleInput = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{

            const response = await fetch('http://localhost:5000/api/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            })

            const res_data = await response.json();
            console.log('response',res_data);
            if(response.ok){
                toast.success('Login Successful !', {
                    style: { fontSize: '14px' }, // Customize font size here
                  })
                storeTokenInLocalStorage(res_data.token)
                console.log('resdata', res_data)
                Navigate('/')
            }else{
                toast.error(res_data.message, {
                    style: { fontSize: '14px' }, // Customize font size here
                  })
            }

        }catch(err){
            console.log('login',err);
        }
       
    }
    return (
        <div className="container ">
        <div className="row ">
            <div className="col-4 bg-primary mt-5 mb-5 p-3">
                <img width="420" height="400" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhUSExMVFRUXFRcYGBUVFxgYFxUVFxcXFxgXFxgYHSggGBolGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8lICUtNTUtLS0tLS8tNzUvNS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAMFBgIBB//EAEMQAAECAwQGCAQEAwYHAAAAAAEAAgMEEQUSITETQVFhcYEGIjKRobHB0RRCUnIHYuHwI3OyFSQzQ4KzU2N0kqLS8f/EABsBAQACAwEBAAAAAAAAAAAAAAADBQIEBgEH/8QANhEBAAEDAQQHCAIBBAMAAAAAAAECAxEEBRIhMRNBUXGx0fAjMmGBkaHB4RUiUhQzQ/EkNEL/2gAMAwEAAhEDEQA/APuKBKLmUDEtlzQcTWrmg4l+0gZiZHgUCSB4IFI2ZQKvtqDCBBdeNcmY7NeXigq5zpI53YYBvca+Aogr4lrxz89PtAH6oF3zcR2cR54uPugiJKABKCRsw8ZPcP8AUUDMG2I7Moh5gHzCB1nSN5oHsad7ag+qCxkbZguIqbn3YeOSC6vAioNRTMIEkDrMhwQLR+0UEkrkUHs1lzQQwe0EDZQIoBB1pDtQMMYCASEEcY0NBgg9gdatcUHUZoAqMEETHkkCqBgw27AgoZ23gyoYb5216vfr5IKKcn4kXtuJGwYDuGfNAsgEAgEAgEAgEAgEE8rNxIXYcRu1HiDggvpDpAw4RWhp+odnmMwgtRGri11RqINRTcgYhNBFTiUHEbq5YIPIJvGhxQSRGACoFCggEQ7UDOiGwIDRDYEHPw43oI3RSMBqQdMbexKDx/Uy17UHjHl2BQQz8xDgC8446hrJ4IMxaNqxI2BN1v0jLmdaBCiAogKICiAOGeHFBA6bhj5xyx8kHH9owvq8D7ID+0YX1eB9kHbZyGfnHPDzQTNIORB4GqD2iAogKICiBmSnHwj1Thracj7cUGms+1WxBRuBGbTnyOsIH2C/nq2IB7bmI4YoOWxC7A60HegG9BH8QdyA+IO5B18Tu8UBob2Nc0BfuYZoDt7qeqBC0p8S+AN55GDdm8+yDLx4rnuLnEknWfTYEEdEBRAIEpi0mNwHWO7LvQV8a0ojsjd4e6BRzicyTxxQcoOTEG0d4UsWLs8qZ+ksOko7Y+oERu0d4SbF2OdM/STpKO2Pq6CjmJjmzic8noNMsF4GoNoxG67w2Ox8c0D8vajDg4XTtzCCwaQRUYjaEBRAUQdNJBqDQjIjUg0lj2wHdR3a1HU79UFrev4Za0BoruNa0QHxG5AfDb/BAfDb/BBxoHIJWxQBQ6kHD23jUIEbRn9ACBQvdkNg2lBl3uLiSSSTiSdaDyiAogWnJxsPPE6gPXYgpJqcfEzNBsGX6oFXvAxJopLVqu7Vu0RmWFy5RbjernEFfjHOddhQ3PccgAceAGJVxa2LMRvX6opj118vFW17Upmd21GZ9dXNZyvRa0Y2JaII/OQ09wq7vU0fxtjlG9P18oRzOtu853ft+1lB/Dh5ppZkbw1hd4uI8ll/L0UcLdvH28Iefx9VXv1+vmbZ+G0vrjRTwDB6FYTtq71Ux92X8bb7Zev/AA3l9UaMONw+gXkbau/4x9z+Nt9slY34bEf4czT7mEeLXeik/mKauFy3n5+cMf4+aZzRX6+StmuiNoQsW3Yw/I6p7n0PcvN/Z173qd2e7HhwN3WWuU5+/jxVL5t8N1yNCcx2wgg8aHUormxqa6d7T15j4+ceSSjac0zu3qceuyTMKKHCoNVT39PdsVYuRhY2r1u7GaJyZl5l0M1aeWo8QoUq7krQbEwyds28EDlEAgEGjsO073Vf2qYH6v1QW7ogcKDMoIxAKCXTtQGnag70g2jvQLRGkkkBBxMTYgwy456m6ydSDJR4rnuLnGpJx/exBxRB5RBXWlaNzqsxdrOpvuUFG51cTntQQte57xDhNL3nIAVV1pdlf16XUzu09nX8+zxVWo2l/bo7Eb1X2/fg1NkdBa9eafU/8Nh8HO9G962Lm0qLVPR6anEduPx+ZQUbPquTv6irM9nr8NhJSUOC27CY1g2NFK8Tmeaqbl2u5Oa5z3rKi3TRGKYwYWDIIBAIBAIIpmXZEbdiNa9uxwBHjksqK6qJzTOJ+DGqmmuMVRmGRtjoKw9eWdo3fQ4ktPB2bedeStbO1MxuaiN6O78cpVt3Z2J37E7sslGESC8w47Cxw27NuwjeFjqNl0Xael0s5js8vKWdnaNduro9TGJ7fPzhMAqKYmmcTzXETExmFvZ1pZNeeDvR3uvHq2ogKIAYYjMY1QaeyJzSCpwI7XvwKC0LxtCBXRnYUBozsKDlA5DPVHBBkrVnNK+vyjBvDbzQJ0QFEFbas/c6je1rP0j3QUJwxKyppmqqKaYzMvKqopiZnk5s6SizkTRQsG/M45NbtPoNa6OxpLWht9Ne419UeX5nq8aG9qbmsr6K1wp658/J9KsSxoMoy7DFXHtPPacfQbgqzU6q5qKs1cuqOqPXa39Pp7dinFPzlZXlrYbGReTBkXkwZeXgvcGXt5MGReTBl5eTBkXkwZF5MGReTBknatnQZllyK2o1EYOadrTq8iprF+5Yq3qJ9fFFetUXad2uHzS17LiyMS67rw3dlwwB9nDYriu1Z2jb3qf61x649sfFVUXLugr3auNE+uHx+AhuDhUYhc3dtV2q5orjEwvrV2m5TFVE5hcWVPZMcftPofRRpFtRAUQTSkcw3Bw4EbRrCDTQnhwBGRxCCwQCDyiCkt2YugsGbs/t19/ugoaICiBW0JrRNr8xwaN+3kgzZxNSa11nzQI0fHiNhQ8bzqDYd53DErqtBo6dJbm9d97H0+HfP6c5rdXVqbnQ2uXj+v8At9MsWz2S0IQ2Urm51MXu1k7tg1BVWpvVX7k11fKOxY2LVNmiKYPX1BhNl7pEwZeX0wZGkTBkaRMGRpEwZGkTDzI0iYe5F9MPMjSJumRpE3TLzSJgyXtCWZHhuhxBVrhzB1OGwhS2rlVquK6ecMLlFNymaauT5jNQHykZ0J+IBz1FpycOXsrvU6e3r7EV08Kuryn18VPYv16K9NFXGn1xj18DzaEVGRyXJVUzRVNNUYmHT01RVETHJfWZNX20PaHiNvH9F49O0QFEF50ems4R3lvqPXvQP1QFUHelO1Bmp2PpHl3dwH78UEFEAUGZnpjSPLtWTRur64oKm0Zigug4nPcFebH0W/V01ccI5d/b8vHuU+1dZuU9FRznn3fvwaPoHIBrXRyMXVa3c0do8zhyK3dqXs1Rajq4z+Gps61imbk9fJrNIqnCzyNImDI0iYMjSJgyNIm6ZGkTBkaRN0yNImDI0iYMjSJuvMjSJuvcvNImDI0iYMjSJh5lnemsjpYOlA60PHiw5jkaHvVls29uXNyeVXi0dfa37e9HOPBkrKmMbh15bjsTbOi3o6ejnHPz+Xh3GydXiehq+XkuJeIWODhq8do/e1c0v2khuDgCMiKhB7RBJBiFjg4Zg1/RBroTWuAcBgQCOaDvRN2IELWoyGSCanqjn+lUGbogKIEbYjXYd3W7DkM/bmgz0RwaCTkMVJatVXa4op5ywuXKbdE11coUEWIXEuOZXeWbVNqiKKeUOLu3Krtc11c5fTrOgiFCZDHytA55nxJPNc1eqmu5VVPXK/t07lEUx1GL6jwkyL6YMi+mHmRfTBl5fTBl7fTD3Ly+vcPMi+mDIvpgyL6YMi+mDIvpgyL6YMi+mDLmIA5pacnAtO8EUPmvYzTMTHU8nExiXy2IwscRra4jmCup4V08eUw52c0V8OcS0EpFvsDteR4/vzXDazTzp71Vvq6u7qdhpb8XrUV/Xv615Y0WoLNmI4HMd/mtZsLGiAogvbGmjcu/SfA4+6B/4g7kFVbse8Wt2AnvwHqgqqICiCgtaJeiEfTh3Z+PkgobYi0AbtxPAZePkr7YVjNdV2erhH59fFS7YvYoi3HXxn165K2XHWb9w810lXuyoKPeh9Lc9czh0ORfTDzI0iYMjSJgyNIvcGRpF5gyNIvcGRpEwZeaRMGXpemDLzSJgyNImDI0iYMjSJgyNImDIvpgy+e2uP48X+Y/xcSuh0/+1T3Qor/+5V3p7EjUcWbcRxH6eSp9uWN63Tdjq4T3T+/Fa7GvYrm3PXxj13eDQSUS69p1VoeBwXMOhaGi9BRA7Y5/iXfqBHdj7oL74begz1omsR27DuCBeiDx2GOzHuQZZxqSdprzK8GetOJeiO3Yd36rtNl2uj0tPx4/X9YcntK7v6ir4cPp+yoNMVYtCH0Nke8ARrAPeKrnZoxOF9FWYy60i8wZGkTBkaRN0yNIm6bw0ibpkaRMGRpE3TLzSJumRpEwZeOigZmiTGDOXukTBkaRMGRpEwZGkTBkCImDLATcS897vqc495JXQW6d2mI7IUlyc1TPxErEuvadhHdrUWqtdLZqo7Y/6SaW70V6mvslqbq4J2jRy77zGnaAvRJRBLKvuvadjh3Vx8EGo0zdqDMTBq9x2uPmgjogXnzSG8/l88PVBnF4Mo91STtNe9fQ6KdymKeyHDXKt6qau2XiyYtVYE3ehBpzZhyxI8MOSqtVb3bme1Zae5vUY7FF+J8/FhSjXQoj4btM0XmOLTS6+oqDkqrWTNNvMLLSRFVeJX/R6OXSku5xLnGBCJJNS4mG2pJOJJOtT2czbpmeyEF3EV1d8rC+pcMMi+mDLwRAvAX17gyL6YeZAiBePXt9e4MqLpjYZn4AgteGERGvqQXYNDhSgP5vBa+osTdpxlNYvRbq3pWlnQtFChwyalkNjCRhW60NruyU1FG7TEIq681TJm8ssMcudIEw9e6RMPMk7Wm7kJx1kXRxII8BVTWLe9chHeubtEsgrhVBBrZU3mNO1o8guB1NG5erp7JnxdtYr37VNXbEL+yzWGNxI9fVQpTdEAguNOgqSg8ogUtX/Cdxb/UEGejjqu+0+RUliM3aI+MeKO7OLdXdLJr6A4gIGrNm9E8HUcHDdt5KK9b6SnHWltXNyop+KUQOkmkGo0rCOF1y5zaMYt/Ne6Cc3Pk0XRt/9zlv+ng/7bVs6ePZU90Ne9PtKu+VjpFNuossH0qtWYmpsWdLPMMCmleCQcrzgSPlApgMzgqzUXK7l3obc47VjYoot2+lrjuexvw6htaXQZiK2MMQ8kULtVboqONcN6ynZ+IzTVOWMa/M4qpjBvoD0hjRtJLTBrGgml49pzQbpDtpacK668zlor1VeaK+cMdXappxXRykv03tiPEjwrPlnFjolC94N00OIbe1ANBcaZ4DaFhq7lc3Is0dbPS26Iom7X1OoX4fQ2C8yZjtjZ6UEDrbaDGlfzVWf8fERmKpz2sf9dMzxpjHYq+i07MOtVzZhxvtY5rwCbpcxgbeAyxAB56lr6equdTivmmv00Rp808l5+J8w5smC1xadMzFpIPZiawtjaOabcTHag0OJuYnsaGxIlZeBjX+DCx/0NW1Zj2VPc1rs+0nvfNeivxUzEjy7IzocMuDosS8S9rWucAyHjheJ7hyNVp4uXKqqInEZ4ys7827dNNcxx6oWNudCBLwnzEtHjCLDF81di4NxcQ5oBBpjryU17RTbpmuiqcwis6zfqiiumMS1fRC2XTUpDivpfxa87XNNK7qih5rc0tybtuKp5tTU0RbuTTHIta07pHUHZblvOsq6sWtynjzlU3rm/OI5EVOhCDV2UP4LOHqfZcRtKMaq53uw0M509Hc0Fkdg/d6BaTbPUQeUQMaU7UERCAogUtVv8J3Fv8AUEGejt6rvtd5FS6ecXaJ+MeKO7/t1d0sgu/cQEAgpem0wfhAw5aVpG7Byo9t0xFqJ+K52PVM3Jj4Nn0dif3SW/kQv9tq900eyo7o8GN+fa1d8+Kw0imwiywPRt122Ju9mWxaf98M+VVU6aP/ADK4n4/hZ6if/Fox8Py32kVthV5YKwng2zMltKXYlabQWA/+SqdPx1lePXJaX+Gkpz65vGm7btXa2m7zgEehHNMY13H1wM50fD1xb3SK2wrMsJJRQbcikfQRzEJgPiFVW8TrqseuELKvho49dcnvxPdWTH85n9L1JtOPZR3o9nT7X5NDYr/7vA/kwv6GrcsR7Knuat6faVd8sl+GZo6cP/Mb5xFobNjM19/m3doTwo7mvtZ9YEUf8t/9JVhej2dXc0bU/wB472J6DTThJlgyMVxJ3UaKeCw2LbibM1T2+TPa9cxdimOxcK8U4QCDXWS3+Cz7fUridpTnVV9/4h2Gg/8AXo7mgslvUP3egWi2ztEBRBJokBEbieJ80HNEC8+ysN3Cvdj6IKAtrhtSJxOSYzwYp7aEg5g07l9Cpq3qYqjrcNVTNNU0z1PFkxCCm6Vyz4sC6xpcb7TQbACqna9m5dsxFEZ4rPZd2i3dma5xwK2dbVowWNhtlgWtaGi8DqAFcHbloU3dbTRTT0XKMcp6vm3arWkqqmqbvOc846/ksZPpFaL3taZVgaXNDiA7BpIqe1sWVN7Wb0RVbxHdLGbOl3Zmm5mfkk6S2LHEds7KYxRS8w/NQXaiuBq3AjDLDFNXpbkXIvWufXBpdTb3Js3eXa4idJ557bkORe2IRS8b11pOFQC0eJWFWr1NUbsW5iWcaXT0zvTcjB3ofYLpVr4kU3o0TtY1DRUmldZJNTwHOfQ6ObMTVX70oNZqouzFNPKHPSywokdzJiA67Hh5Y0vAGoxOAIJOedcV5rdJVcmLlv3oe6TVU0RNFz3ZLw7VtVwufCw2Oy0hNGj81L1Dyqoou62r+u5x7Uk2tJH9t/h2Kro7KmDajmFxe4QyXPPzPcxrnHhecQoNLb3NZNMznhxn6J9Tc39JFURjivunkpFjywZDYXu0rTRuJoGvx8fFbu0rVVdqIojPFp6C7TRdzVOOC6su82DCa4UIhQwQdRDQCO9bVmiYtUxPY1rtWblUx2s10LlokuZgxWFl97S2ubgC/LvC09m6e5TNe9GOLc2hft1RRuzlaWpNufDe1uFWOFNZqNatb1j2VURxnEqy1e9rTM8Iyouikq+FAuvaWm+TQ7MFr7Is12rExXGJz5Njal2i5eiaJzGPNcq0VoQCDbSUK7DYNjGjnTFcFqqt+/XV2zPi7XT07tqmnsiF7ZrKM4k+3ooExqiAogufgxsQV89DuvcN/mKoIKIPHMqCNoogzhbTkgyNswbkZ42m8P8AViu22bd6TTUT2Rj6cHI7Rt7moq+PH6klvNIIBAIAIJ4c44a6jf7qObVMpIuTCds8NdVHNmWcXYSCZbt9Fj0c9jLfhX21PR4bWul2CKbxvMqMW0rhjWtRqqtTVzfoiJtU57W1pos1zMXKsdinidJ5w9Vki9rtReXXQebQPFaU6zU1cKbM5+flDbjSaeONV2MfLzlL0Wst0Bz48d4dGiZ0NaNJBNaYVJAyyop9DoblEzdue9KHWayiuIt2/dhfunRqqVZxalXTchDEnHHLDhn3qSLVMMJuTPIuTVSIwgEAgEEsnBvvaza4DlrUOou9Faqr7IS2LfSXaaO2W6ouBdsvJaHdY0bv19UElEHcNtSBvCC7+IOwIELTxcHbqd3/ANQJ0QFEFJaMK6878e/PxQZjpRLdmIPtPmPVdDsK/iarU98eE/hR7Zs5im7HdP4Z9dGoAgEAgEAgEAgEAgEAgEAgEAgEAguui0reiF+pow+52HlVUu27+7Zi3HOqftH7wt9j2d67Nyerxn9NbAhXnAb/AAXKukXaAogYkIN5/AV9EFn8OdqBablzdJpligrqICiBK1IFW3vp8igpJyVERjmHWM9h1HvU+mvzYu03I6kN+zF63NE9bDRIZaS0ihBoRvC7uiuK6Yqp5S4yumaKppq5w5WTEIBAIBAIBAIBAIBAIBAIBAIBBubGktDCa0jrHrO+46uWXJcRtDU/6i/NUco4R3fvm7DRafoLMU9fOV5ZkHN3Ieq0m2fogKILGzKNBJzJ8Agd0zdvmg6JG5BSRod0kbPJBxRB4W1wKCkmIFxxHdvCDMdKLO/zmjc/0d6Hkui2LrP+Cr5eX5UW1tJ/zU/PzZxdEoQgEAgEAgEAgEAgEAgEAgEAgvOi9m6R+lcOqw4fmf8Apn3Km2xrOit9FT71X2j9rfZWk6SvpauUeP6bBkOpoMyuUdIuIcMNAA1IOqIPWtqabUFg2HQUoUHt07Cg8QeTsGrQ7YMeH780CNEBRAvOy18YZjLfuQVDmAggioNQRtGxexM0zmObyYiYxLE25ZRgPqP8Nx6p2flO/wBF2Wz9dTqaOPvRzj8w5TXaOdPXmPdnl5KxWLQCAQCAQCAQCAQCAQCAQCByyrOdMPutwAoXO+ltfPYFqazV0aa3vVc+qO311trSaWrUV7scuuW+l5drGhjRRoFB+9q4q7dqu1zXVzl11u3TbpiinlC0kZegvHM5bgo2ZqiAognlWY1QW6AQc3BsCBWKcSNWxAi9lCg8ogKIEJ6V+ZvMeqCtmJdsRpY4Vacx+8ipLV2u1XFdE4mGFy3TcpmiqOEsRbNjvlzXtQzk7ZudsPmuw0Ovo1NPZV1x+Y+Hg5XW6GvT1cONPVPn64qxWDRCAQCAQCAQCAQCAQCB2yrMfMOutwA7Tjk0ep3LU1est6ajeq59Udc+u1taXSV6irFPLrlvJCRZBYGMGGs63HaVx2p1NzUV79bq7FiixRuULKTlq9Y5ef6LXTLCiAog6hw7xAGtBathACgGSBW8dpQF47Sg70ztqCZkMEVOZQLzUPUOKBIhAUQFECU1J/M3mPb2QIvhhwIIBBwIOR4hZU1TTMVUziYeVUxVGJjgylsdFyKvgYj/AIZzH2k58M+K6PRbZpn+l/hPb5+sKHV7JmP7Wfp5M09pBoQQRmDgRyV9ExMZhSTExOJeL14EAgEAgEAgEAAgv7I6MviUdFqxv0/M7/15qm1m2Ldr+tr+1X2jzW2k2VXc/td4R9/02EvAbDaGsaGtGQH7xK5i7dru1b9c5l0Vu3Tbp3aIxB6Vla4uy2bf0UbM/RAUQe0QPQYF1t75vJACM7agn0DdnmgNC3Z5oOPhhtQeGNdwpkg9DL+OSCCZgUpRAtRAUQFEC8xKB2IwPgeKCviQi00IogRn7MhRx12An6hg4c/dbWn1l7Tz7OeHZ1fRr39Lave/Hz62bnuiLxjCeHD6XdU9+R8Fe2NuW6uF2nHxjjHn4qa9seuONqc/Cefl4KSas2NC7cNw30qO8YK1taqzd9yqJ9disu6W9b9+mYKrYQBAIBBPLSUWJ2GOdwBp35KK5ftWvfqiPmlt2Llz3KZldSXROK7GI4QxsHWd4YDvVVf23Zp4W43p+kef2WVnY92rjcnH3nyaSzrGgwMWtq763Yu5bOSotTtC/qOFU4jsjl+1zp9DZscaY49s81ixhJoBUrSbZ+XkwMXYnZqHugaogKICiBiFCu0cRwHqgnEW9htQe/Djag5+JOxAfEHYg7+IGwoODCLsdqDpr7mB8EHjuvlq2oIY0uQK4IIKICiAog8cwHA4hApFkB8ppuOSBSJLubmOeYQRhBBGkoT+1DY7i0FTUam9R7tcx85RVWLVfvUxPygs6w5Y/wCSzlUeRWxG0tVH/wBz9kP+g0/+EBthSw/yW+J9U/ktV/nP28j/AEGn/wAITwbPgs7MKGN4aK96gr1V+v3q5n5ylo09qj3aYj5GVAmdw4LnZCvl3oG4Uh9R5D3QNw4YaKAUQdUQFEBRBPDhhtC4cB7oJ3Ov4Djig5EItxOpB38QN6Dj4c7kB8OdyDjRO2IJ2RABQnFBHFbeNRig9g9WtcEHUVwcKDEoIDBOsU3oIi2iDyiAogKICiDh8FpzAPJBE6RZsI4FBwbPbtd4eyA/s9u13h7IO2yLN54lBIyA0ZNCCRAUQFEBRB61hOSBmCxrc8/JB7GF7LFB5CF01OCCSI8EUGaCAQjsQM6Zu1AaZu1B1VApFGJQTS+XNBzM6kHMvmgniHA8ECdEEr5cau5BCW0QeUQFEBRAUQFEBRAUQFEBRAUQegIC6gdhgABAvHHWKCSWyKD2Zy5oIYIxCBslAjRAUQCByFkOCCCZz5IOpXXy9UHcz2UC8PMcUDqBAoG4Qq0III7QDgg5YwnJAFhGpBzRAICiAQFEHUNlUEj4NBWqCJuY4oHkCL8zxQNS/ZH71oIprMICVz5IJo3ZKBMIH0AgQQOQshwQQTOfJB1K6+Xqg7mOygXh5jigdQIFA5B7IQQTOfL3QdSutBJMdkoFW5hBK/2QRfvwQMwMkEc1mOCAlcyglj9k/vWgVbmOKB5Ai/M8UDUv2R+9aCKazCAlc+SCaN2SgTCB9AIP/9k=" alt="login" />
            </div>
        
            <div className="col-8 text-center mt-5 mb-5 p-3">
            <div className="login-form">
                <h1 className="main-heading mb3"> Login Form </h1>

                <form onSubmit={handleSubmit} className="container mt-4">
                <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label  fs-2">email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control fs-4" id="email" name="email" placeholder="enter your email..." onChange={handleInput} value={user.email} required />
                </div>
                </div>
                
                <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label fs-2">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control fs-4" id="password" name="password" placeholder="enter your password..." onChange={handleInput} value={user.password} required />
                </div>
            </div>
                <button type="submit" className="btn btn-primary fs-2">Login</button>
                </form>

            </div>
            </div>
        </div>
        </div>
    )

}