import React, { Component } from 'react'
import Content from '../../Components/Content'
import fathur from "../../Assets/images/fathur1.jpg"
import {Col,Image} from "react-bootstrap"

export default class About extends Component {
    render() {
        return (
            <Content>
               <center>
                    <Image src={fathur}  roundedCircle width={350} height={350} alt="foto fathur"/>
                </center>
                <br />
                <p align="justify">
                    Halo nama saya Muhammad Fathurachman, sering dipanggil fathur. Saya tinggal dikota yang dikenal
                    sebagai kota hujan. Disini dingin dan mendung. tetapi hati saya tidak hehehe. Hobi saya membaca buku
                    dan bermain gitar <br />
                    Saya bekerja sebagai seorang Front End Developer di salah satu perusahaan di Indonesia. Dan Saya
                    mengenyam pendidikan Sarjana di Universitar Budi Luhur jurusan Teknik Informatika pada semester 5 saat ini.
                    Sungguh belajar dari rumah mempunyai benefit banyak waktu untuk explorasi lebih dalam didunia yang kita inginkan.
                    Tetapi hal yang aku tidak suka adalah sosialisasi bersama orang-orang dan teman-teman dilingkungan kampus karena 
                    pandemi Covid-19 belum selesai <br />
                    Justru karena tekat yang kuat untuk terus belajar dari kesalahan yang telah diperbuat dan mengembangkan 
                    skill kita punyai. Kita telah melangkah maju dari hari sebelumnya. Hal yang terpenting yang saya 
                    saya tanami dalam diri saya adalah <i>jangan bandinkan kamu dengan orang lain</i>. Orang lain mempunyai skillnya 
                    masing-masing dengan kemampuan masing-masing. Mungkin bisa jadi mereka mempunyai Previledge dari keluarga 
                    yang serba ada dan memudahkan mereka untuk tumbuh berkembang. Apa yang kita punya belum tentu mereka punya, dan apa yang 
                    mereka punya belum tentu kita punya. Jadilah diri sendiri dan membanggakan diri sendiri, karena usahamu 
                    yang menentukan kesuksesanmu bukan orang lain.
                </p>
            </Content>
        )
    }
}
