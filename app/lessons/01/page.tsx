import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Lesson 1: Script I, Vowels</h1>
        <p>
          © 2020 David Porter This work is licensed under a CC BY-NC-SA 4.0 license
        </p>
        <section>
          <h2>Basic Principles</h2>
          <ol>
            <li>
              Written from top to bottom, left to right (so books and documents flow in the
              opposite direction in Manchu as they do in classical Chinese; this principle is
              frequently employed in bilingual documents to avoid giving precedence to one
              language)
            </li>
            <li>
              The letters in a word are written along a straight vertical axis, linked together.
              Words are separated by a space.
            </li>
            <li>
              Letters change form depending on their position in the word; there are four
              possible positions: standalone (only for vowels), initial, intermediate, and final.
              Some letters lack one (or more) of the forms because they can only be used in
              certain positions.
            </li>
            <li>
              Some letters have multiple forms in the same position, depending on the letters
              that surround them.
            </li>
            <li>
              Punctuation in Manchu is poorly standardized, but there are two basic punctuation
              marks (prior to Modern Sibe, which has adopted additional marks):
              These represent a partial stop (sometimes roughly equivalent to a comma,
              sometimes to a period) and a full stop (sometimes roughly equivalent to a period,
              sometimes marking the end of a document or a section of a document)
              respectively.
            </li>
            <li>
              There is a certain degree of variation between printed and handwritten styles and
              within handwritten styles; I will vary the styles that you are shown to help you
              practice.
            </li>
            <li>
              The standard transcription of Manchu is the Möllendorff system, a version of
              which we will use in this class
            </li>
          </ol>
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
        </section>
      </main>
    </div>
  );
}
