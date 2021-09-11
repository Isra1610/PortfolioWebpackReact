import "../styles/Contact.css";

const Contact = () => {
	return (
		<div id="contact" name="targetContact">
			<div className="contact-container">
				<div className="contact-header">
					<span className="contact-header--title">CONTACTO</span>
					<div className="contact-header--social">
						<a
							name="fbContact"
							href="https://www.facebook.com/Israaaeelooo"
							className="contact-social contact-fb"
							target="__blank"
						></a>
						<a
							name="instagramContact"
							href="https://www.instagram.com/israelisback/"
							className="contact-social contact-insta"
							target="__blank"
						></a>
						<a
							name="linkedinContact"
							href="https://www.linkedin.com/in/israel-rojas-2503ab1b2/"
							className="contact-social contact-linkedIn"
							target="__blank"
						></a>
					</div>
				</div>
				<div className="contact-form">
					<form action="" method="post" className="contact-form--inputs">
						<input
							type="text"
							name="name"
							id="fname"
							placeholder="NOMBRE"
							required
							className="form-input"
						/>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="EMAIL"
							required
							className="form-input"
						/>
						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="ASUNTO"
							required
							className="form-input"
						/>
						<textarea
							name="emailContent"
							id="emailContent"
							placeholder="MENSAJE"
							required
							className="form-message"
						></textarea>
						<div className="button-container">
							<button className="form-button">ENVIAR</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
