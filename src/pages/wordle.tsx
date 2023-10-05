import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Keyboard from '@/components/wordle/Keyboard';
import TextBox from '@/components/wordle/TextBox';
import TextRow from '@/components/wordle/TextRow';
import dbConnect from '@/lib/mongoose';
import 'animate.css';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function WordlePage({}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) {
	const { data: session } = useSession();
	const [reset, setReset] = useState(false);

	useEffect(() => {}, []);

	return (
		<div className="animate__animated animate__fadeIn">
			<NavBar user={session ? session.user : null} />
			<div className="flex flex-col justify-center items-center ">
				<TextRow>
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
				</TextRow>
				<TextRow>
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
				</TextRow>
				<TextRow>
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
				</TextRow>
				<TextRow>
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
				</TextRow>
				<TextRow>
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
					<TextBox />
				</TextRow>
			</div>

			<div className="flex flex-col justify-center items-center ">
				<Keyboard />
			</div>

			<Footer />
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	await dbConnect();

	return {
		props: {},
	};
};
