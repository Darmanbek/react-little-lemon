import { useState } from "react";
import "./sectionBooking.css";

const SectionBooking = () => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });
    const [confirmed, setConfirmed] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Send Form:", formData);
        setConfirmed(true)
    };

    if (confirmed) {
        return <h1 className="confirm">Booking has been confirmed!</h1>
    }
    return (
        <div className="section-booking">
            <div className="container">
                <div className="booking-inner">
                    <form onSubmit={handleSubmit}>
                        <div className="form-item">
                            <label>
                                Choice Date:
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <div className="form-item">
                            <label>
                                Choice Time:
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <div className="form-item">
                            <label>
                                Number of Guests:
                                <input
                                    type="number"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <div className="form-item">
                            <label>
                                Occasion:
                                <textarea
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        <div className="form-item">
                            <button type="submit">Сделать бронирование</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SectionBooking;
