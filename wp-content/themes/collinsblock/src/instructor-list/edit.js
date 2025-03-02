/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<section {...useBlockProps()}>
			<div>
				<figure>
					<img
						src="https://picsum.photos/400"
						alt="Random Image used as profile"
					/>
				</figure>
				<h4>Instructor Sarah Collin</h4>

				<h6>
					Sarah Collins is a passionate music educator who has been teaching
					piano and guitar for over 15 years.
				</h6>

				<p>Instruments: Piano, Guitar</p>
			</div>

			<div>
				<figure>
					<img
						src="https://picsum.photos/400"
						alt="Random Image used as profile"
					/>
				</figure>
				<h4>Instructor Billy Jones</h4>
				<p>
					Billy Jones is a passionate music educator who has been teaching flute
					and drums for over 10 years.
				</p>
				<p>Instruments: Flute, Drum</p>
			</div>

			<div>
				<figure>
					<img
						src="https://picsum.photos/400"
						alt="Random Image used as profile"
					/>
				</figure>
				<h4>Instructor Sarah Jones</h4>
				<p>
					Sarah Jones is a passionate music educator who has been teaching volin
					for over 5 years.
				</p>
				<p>Instruments: Volin</p>
			</div>
		</section>
	);
}
