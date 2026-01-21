import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
    return (
        <section className="py-32 px-6 md:px-12 bg-bg-secondary flex flex-col items-center text-center">
            <div className="max-w-2xl w-full">
                <h2 className="text-4xl md:text-6xl font-heading text-text-primary mb-6">Let's Start a Conversation.</h2>
                <p className="text-text-secondary text-lg mb-12 font-light">
                    Have a project in mind or just want to discuss literature? I'm always open to new narratives.
                </p>

                <form className="flex flex-col gap-6 w-full text-left">
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="flex-1 bg-transparent border-b border-white/20 py-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-white/20"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="flex-1 bg-transparent border-b border-white/20 py-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-white/20"
                        />
                    </div>
                    <textarea
                        placeholder="Tell me about your story..."
                        rows={4}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-text-primary focus:outline-none focus:border-accent-gold transition-colors resize-none placeholder:text-white/20"
                    ></textarea>

                    <div className="flex justify-center mt-12">
                        <MagneticButton className="bg-accent-gold text-bg-primary hover:bg-white transition-colors">
                            Send Message
                        </MagneticButton>
                    </div>
                </form>
            </div>
        </section>
    );
}
