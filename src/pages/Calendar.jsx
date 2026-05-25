import "../style.css";
import React from "react";

function Calendar(){
    return (
        <body>

      <nav>
        <a href="/">Home</a>
        <a href="/guide">Your Guide To F1</a>
        <a href="/manufactures">Manufactures</a>
      </nav>

     <p className="content1">It's one thing to know F1, but it's another to know when to watch and with whom.</p>
       

     <table  cellpadding="10">
  <tr>
    <th>Round</th>
    <th>Grand Prix</th>
    <th>Country</th>
    <th>Date</th>
    <th>Circuit</th>
  </tr>

  <tr>
    <td>1</td>
    <td>Australian Grand Prix</td>
    <td>Australia</td>
    <td>06-08 MAR</td>
    <td>Albert Park Circuit</td>
  </tr>

  <tr>
    <td>2</td>
    <td>Chinese Grand Prix</td>
    <td>China</td>
    <td>13-15 MAR</td>
    <td>Shanghai International Circuit</td>
  </tr>

  <tr>
    <td>3</td>
    <td>Japanese Grand Prix</td>
    <td>Japan</td>
    <td>27-29 MAR</td>
    <td>Suzuka Circuit</td>
  </tr>

  <tr>
    <td>4</td>
    <td>Miami Grand Prix</td>
    <td>USA</td>
    <td>01=03 MAY</td>
    <td>Miami International Autodrome</td>
  </tr>

  <tr>
    <td>5</td>
    <td>Canadian Grand Prix</td>
    <td>Canada</td>
    <td>22-24 MAy</td>
    <td>Gilles Villeneuve Circuit</td>
  </tr>

  <tr>
    <td>6</td>
    <td>Monaco Grand Prix</td>
    <td>Monaco</td>
    <td>05-07 JUN</td>
    <td>Circuite De Monaco</td>
  </tr>

  <tr>
    <td>7</td>
    <td>Barcelona-Catalunya Grand Prix</td>
    <td>Spain</td>
    <td>11-14 JUN</td>
    <td>Circuit de Barcelona-Catalunya</td>
  </tr>

  <tr>
    <td>8</td>
    <td>Austrian Grand Prix</td>
    <td>Austria</td>
    <td>26-28 JUN</td>
    <td>RedBull Ring</td>
  </tr>

  <tr>
    <td>9</td>
    <td>Great Britain Grand Prix</td>
    <td>UK</td>
    <td>03-05 JUL</td>
    <td>Silverstone</td>
  </tr>

  <tr>
    <td>10</td>
    <td>Belgian Grand Prix</td>
    <td>Belgium</td>
    <td>17-19 JUL</td>
    <td>Spa-Francorchamps</td>
  </tr>

  <tr>
    <td>11</td>
    <td>Hungarian Grand Prix</td>
    <td>Hungary</td>
    <td>24-26 JUL</td>
    <td>Hungaroring</td>
  </tr>

  <tr>
    <td>12</td>
    <td>Dutch Grand Prix</td>
    <td>Netherlands</td>
    <td>21-23 AUG</td>
    <td>Zandvoort Circuit</td>
  </tr>

  <tr>
    <td>13</td>
    <td>Italian Grand Prix</td>
    <td>Italy</td>
    <td>03-06 SEP</td>
    <td>Autódromo Internazionale Monza</td>
  </tr>

  <tr>
    <td>14</td>
    <td>Spanish Grand Prix</td>
    <td>Spain</td>
    <td>11-13 SEP</td>
    <td>Madring</td>
  </tr>

  <tr>
    <td>15</td>
    <td>Azerbaijan Grand Prix</td>
    <td>Azerbaijan</td>
    <td>24-26 SEP</td>
    <td>Baku City Circuit</td>
  </tr>

  <tr>
    <td>16</td>
    <td>Singapore Grand Prix</td>
    <td>Singapore</td>
    <td>09-11 OCT</td>
    <td>Marina Bay Street Circuit</td>
  </tr>

  <tr>
    <td>17</td>
    <td>United States Grand Prix</td>
    <td>USA</td>
    <td>23-25 OCT</td>
    <td>Circuit of the Americas</td>
  </tr>

  <tr>
    <td>18</td>
    <td>Mexico City Grand Prix</td>
    <td>Mexico</td>
    <td>30 OCT-01 NOV</td>
    <td>Autódromo Hermanos Rodríguez</td>
  </tr>

  <tr>
    <td>19</td>
    <td>Brazilian Grand Prix</td>
    <td>Brazil</td>
    <td>06-08 NOV</td>
    <td>Interlagos Circuit</td>
  </tr>

  <tr>
    <td>20</td>
    <td>Las Vegas Grand Prix</td>
    <td>USA</td>
    <td>19-21 Nov</td>
    <td>Las Vegas Strip Circuit</td>
  </tr>
    
  <tr>
    <td>21</td>
    <td>Qatarian Grand Prix</td>
    <td>Qatar</td>
    <td>27-29 Nov</td>
    <td>Losail International Circuit</td>
  </tr>
    
  <tr>
    <td>22</td>
    <td>Abu Dhabi Grand Prix</td>
    <td>UAE</td>
    <td>04-06 DEC</td>
    <td>Yas Marina Circuit</td>
  </tr>

</table>
  <footer>
  <p>All rights reserved	&#169;</p>
</footer>
</body>
    )
}

export default Calendar;