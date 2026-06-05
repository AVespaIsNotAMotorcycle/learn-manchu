import Image from "next/image";
import lessonStyles from "../lessons.module.css";
import "./lesson01.css";

export default function Home() {
  return (
    <div className={lessonStyles.page}>
      <main className={lessonStyles.main}>
        <h1>Lesson 1: Script I, Vowels</h1>
        <p>
          © 2020 David Porter This work is licensed under a CC BY-NC-SA 4.0 license
        </p>
        <section>
          <h2>Basic Principles</h2>
            <p className="credit-david-porter">
              Written from top to bottom, left to right (so books and documents flow in the
              opposite direction in Manchu as they do in classical Chinese; this principle is
              frequently employed in bilingual documents to avoid giving precedence to one
              language)
            </p>
            <figure>
	            <p className="manchu-text demonstrate-directionality">
								<span>ᡩᡝ᠈ </span>
								<span>ᠮᡳᠩᡤᠠᠨ </span>
								<span>ᠴᠣᠣᡥᠠ </span>
								<span>ᠪᡝ </span>
								<span>ᠠᡶᠠᠪᡠᡶᡳ </span>
								<span>ᡠᠩᡤᡳᡶᡳ᠈ </span>
								<span>ᡥᡝᠰᡳᡥᡝ᠈ </span>
								<span>ᠣᠮᠣᡥᠣ </span>
								<span>ᠰᡠᡵᡠ᠈ </span>
								<span>ᡶᡝᠨᡝᡥᡝ </span>
								<span>ᡨᠣᡴᠰᠣ᠈ </span>
								<span>ᡨᡝᡵᡝ </span>
								<span>ᡤᠣᠯᠣ </span>
								<span>ᠪᡝ </span>
								<span>ᠰᡠᠴᡠᡶᡳ </span>
								<span>ᠸᠠᠴᡳᡥᡳᠶᠠᠮᡝ </span>
								<span>ᡤᠠᡳᡶᡳ᠈ </span>
								<span>ᠵᡠᠸᡝ </span>
								<span>ᠮᡳᠩᡤᠠᠨ </span>
								<span>ᠣᠯᠵᡳ </span>
								<span>ᡤᠠᠵᡳᡥᠠ᠉ </span>
              </p>
              <figcaption>
                <span>The above is from lines 101000415-101000502 of the </span>
                <a
                  href="https://www.manchustudiesgroup.org/translations/lao-manwen-dang/transliteration-of-the-manbun-roto/"
                >
                  Transliteration of the Manbun rōtō
                </a>
              </figcaption>
            </figure>
            <p className="credit-david-porter">
              The letters in a word are written along a straight vertical axis, linked together.
              Words are separated by a space.
            </p>
            <p className="credit-david-porter">
              Letters change form depending on their position in the word; there are four
              possible positions: standalone (only for vowels), initial, intermediate, and final.
              Some letters lack one (or more) of the forms because they can only be used in
              certain positions.
            </p>
            <p className="credit-david-porter">
              Some letters have multiple forms in the same position, depending on the letters
              that surround them.
            </p>
            <p>
              Punctuation in Manchu is poorly standardized, but there are two basic punctuation
              marks (prior to Modern Sibe, which has adopted additional marks):
              These represent a partial stop (sometimes roughly equivalent to a comma,
              sometimes to a period) and a full stop (sometimes roughly equivalent to a period,
              sometimes marking the end of a document or a section of a document)
              respectively.
            </p>
            <p>
              There is a certain degree of variation between printed and handwritten styles and
              within handwritten styles; I will vary the styles that you are shown to help you
              practice.
            </p>
            <p>
              The standard transcription of Manchu is the Möllendorff system, a version of
              which we will use in this class
            </p>
        </section>
        <section>
          <h2>Vowels</h2>
          <ol>
            <li>
              Manchu has six vowels: a, e, i, o, u, and ū (often called “long u” due to the
              macron used in romanization, though its pronunciation is not in fact longer than
              that of u)
            </li>
            <li>
              ū is often transcribed using the letter v (which otherwise does not appear in
              Manchu) for the sake of convenience. This convention is also commonly used in
              Manchu input systems.
            </li>
            <li>
              The vowel i is written with two diagonal strokes when following another vowel in
              the intermediate position.
            </li>
            <li>
              In general, a and e, and o and u are distinguished from each other in the
              intermediate and final positions through the addition of a dot to form e and u. We
              will discuss the exceptions to this rule when we study the consonant k/g/h and t/d
            </li>
            <li>
              Manchu has limited vowel harmony, with e and u considered front vowels, a, o,
              and ū considered back vowels, and i considered a neutral vowel
            </li>
          </ol>
          <p>
            To study the basic vowel forms, we will combine vowels with three different consonants,
          </p>
          <table>
            <tr>
              <th>m</th>
              <th>l</th>
              <th>b</th>
            </tr>
            <tr>
              <th>
                <span className="manchu-text">ᠮ</span>
              </th>
              <th>
                <span className="manchu-text">ᠯ</span>
              </th>
              <th>
                <span className="manchu-text">ᠪ</span>
              </th>
            </tr>
          </table>
          <p>
            Note that vowels combine with b differently from how they combine with m and l. Also,
            note that ū does not appear in the following examples, becaūse it is ūsed almost
            exclūsively with the more complicated consonants that we will cover in Lesson 2
          </p>
        </section>
        <section>
          <h2>Practice</h2>
          <section>
            <h3>Examples</h3>
            <ul>
              <li>
                <span className="manchu-text"> ᠠᠮᠠ </span>
                ama
              </li>
              <li>
                <span className="manchu-text"> ᡝᠮᡝ </span>
                eme
              </li>
              <li>
                <span className="manchu-text"> ᠮᡳᠯᠠ </span>
                mila
              </li>
              <li>
                <span className="manchu-text"> ᠣᠮᠣ </span>
                omo
              </li>
              <li>
                <span className="manchu-text"> ᡝᠮᡠ </span>
                emu
              </li>
              <li>
                <span className="manchu-text"> ᠠᠮᠪᠠ </span>
                amba
              </li>
              <li>
                <span className="manchu-text"> ᠠᡳᠯᡳ </span>
                aili
              </li>
              <li>
                <span className="manchu-text"> ᠯᠠᠮᠠ </span>
                lama
              </li>
              <li>
                <span className="manchu-text"> ᠪᠠᠪᡝ </span>
                babe
              </li>
              <li>
                <span className="manchu-text"> ᡳᠯᡳ </span>
                ili
              </li>
              <li>
                <span className="manchu-text"> ᠪᡳ </span>
                bi
              </li>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}
