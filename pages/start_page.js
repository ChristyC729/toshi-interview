import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Start() {

    const onSubmit = async (event)=> {
        event.preventDefault()
        const data={
            customer_name: event.target.customer_name.value,
            origin: event.target.origin.value,
            destination: event.target.destination.value,
            delivery_time: event.target.delivery_time.value,
        }

        const endpoint = '/api/matrix'

        axios.post(endpoint,data).then(response=>console.log(response.data)).catch(error=>console.log(error))

    }


    return (
        <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.title}>
            Place order here!
            </h1>


            <div className={styles.grid}>
            <form onSubmit={onSubmit}>
                <label>Customer Name</label>
                <input id="customer_name"/>

                <label>Origin</label>
                <input id="origin"/>

                <label>Destination</label>
                <input id="destination"/>

                <label>Delivery Time</label>
                <input id="delivery_time"/>

                <button>Submit!</button>
            </form>
            </div>
        </main>
        </div>
    )
}
