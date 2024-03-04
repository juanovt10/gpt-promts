
import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className="head_text text-center">
                Discover & Share AI promts
                <br className="max-md:hidden"/>
                <span className="orange_gradient">
                    AI-Powered Prompts
                </span>
                <p className="desc text-center">
                    Promptopia is an open-source AI promting
                    tool for modern world to discover, create
                    and share creatative prompts.
                </p>

                <Feed />
            </h1>
        </section>
    )
}

export default Home