import svgList from "@/styles/svgList";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = (props) => {
  return (
    <section className={classes.container}>
      <ul className={classes.list1}>
        <li>
          <div className={classes.site_icon}>
            <div className={classes.site_icon_name}>
              <h2>BetOnIt</h2>
              <span></span>
            </div>
            <div className={classes.nigeria_pic}>
              <Image
                alt="nigeria-pic"
                src="http://s.sporty.net/global/main/modules/main/desktop/common/core/image/flagNigeria.97e41cea57.png"
                width={200}
                height={200}
              />
            </div>
          </div>
          <ul className={classes.club_icons}>
            <li>Official Sports Betting Partner</li>
            <li>{svgList.manunited}</li>
            <li>{svgList.barca}</li>
          </ul>
        </li>
        <li className={classes.lists}>
          <h5>BetOnIt Nigeria</h5>
          <ul>
            <li>
              <span>&gt;</span>
              <Link href=""> About Us</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Terms and Conditions</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Responsible Gambling</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Privacy Policy</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> BetOnIt Group</Link>
            </li>
          </ul>
        </li>
        <li className={classes.lists}>
          <h5>How to Play</h5>
          <ul>
            <li>
              <span>&gt;</span>
              <Link href=""> FAQ</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Sports</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Live Betting</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Games</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> JackPot</Link>
            </li>
            <li>
              <span>&gt;</span>
              <Link href=""> Others</Link>
            </li>
          </ul>
        </li>
        <li className={classes.lists}>
          <h5>Connect with us</h5>
          <ul>
            <li>Telephone: +23466688843 | 08145893560</li>
            <li>Email: victorobioratech@gmail.com</li>
            <li className={classes.icon_socials}>
              <Link href="">{svgList.facebook}</Link>
              <Link href="">{svgList.twitter}</Link>
              <Link href="">{svgList.instagram}</Link>
              <Link href="">{svgList.telegram}</Link>
              <Link href="">{svgList.youtube}</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className={classes.list2}>
        <li className={classes.list2Image}>
          <Image alt="18plus" width={400} height={400} src='https://s.sporty.net/global/main/modules/main/desktop/common/core/image/forum@2x.c05a82e567.svg'/>
        </li>
        <li>
        Age 18 and above only to register or play at BetOnIt. Play Responsibly.
        <br />
         Betting is addictive and can be psychologically harmful.
        </li>
        <li className={classes.list2Image}>
          <Image src='https://s.sporty.net/global/main/modules/main/desktop/common/core/image/license@2x.c598257514.svg' alt="text" width={200} height={300} />
        </li>
        <li>
        BetOnIt Nigeria is NOT licensed by National Lottery Regulatory Commission. <br /> This is just a personal project.
        </li>
      </ul>
      <ul className={classes.list3}>
        <li>
          <ul className={classes.list3_sponsorslist}>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_gtbank.a868bb38f2.png' alt="gtbank" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_firstbank.7b50fd39e2.png' alt="firstbank" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_opoy.90ff46b6a4.png' alt="opay" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_quickteller.a6b23d7b50.png' alt="quickteller" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_verve.5ab70036b4.png' alt="verve" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_visa.fd08bf37cf.png' alt="visa" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_mc.51fc36230c.png' alt="mastercard" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_access.3472797237.png' alt="accesssbank" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_uba.2ee63a96d0.png' alt="uba" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_zenith.fafd71c357.png' alt="zenith" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_diamond.7ca043a3a4.png' alt="diamond" height={500} width={500}/></li>
            <li> <Image src='https://s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/logo_fidelity.876157a522.png' alt="fidelity" height={500} width={500}/></li>
          </ul>
        </li>
        <li>
        © 2023 BetOnIt. All rights reserved.
        </li>
      </ul>
    </section>
  );
};

export default Footer;
