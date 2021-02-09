$(function () {
    // alert('a');

    let getSel = (x) => document.querySelector(x);

    $(".bold,.align_left,.font_style").css({
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
    })
    $(".align_right").css({
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
    })

 

    // BOLD
    let boldCheck = false;
    $('.bold').click(function () {
        if (boldCheck == false) {
            $(".bold").css({
                backgroundColor: 'lightgray',
            })
            $('.create_area').css({
                fontWeight: 'bold',
            })
            boldCheck = true;
        } else {
            $(".bold").css({
                backgroundColor: 'white',
            })
            $('.create_area').css({
                fontWeight: 'normal',
            })
            boldCheck = false;
        }
    })


    // Italic
    let italicCheck = false;
    $('.rotated').click(function () {
        if (italicCheck == false) {
            $(".rotated").css({
                backgroundColor: 'lightgray',
            })
            $('.create_area').css({
                fontStyle: 'italic',
            })
            italicCheck = true;
        } else {
            $(".rotated").css({
                backgroundColor: 'white',
            })
            $('.create_area').css({
                fontStyle: 'normal',
            })
            italicCheck = false;
        }
    })

    // Underline
    let underlineCheck = false;
    $('.underline').click(function () {
        if (underlineCheck == false) {
            $(".cross_line").css({
                backgroundColor: 'white',
            })
            $('.create_area').css({
                textDecoration: "none",
            })
            crosslineCheck = false;
            $(".underline").css({
                backgroundColor: 'lightgray',
            })
            $('.create_area').css({
                textDecoration: "underline",
            })
            underlineCheck = true;

        } else {
            $(".underline").css({
                backgroundColor: 'white',
            })
            $('.create_area').css({
                textDecoration: "none",
            })
            underlineCheck = false;
        }
    })


    // Crossline
    let crosslineCheck = false;
    $('.cross_line').click(function () {
        if (crosslineCheck == false) {
            $(".underline").css({
                backgroundColor: 'white',
            })
            $('.create_area').css({
                textDecoration: "none",
            })
            $(".cross_line").css({
                backgroundColor: 'lightgray',
            })
            $('.create_area').css({
                textDecoration: "line-through",
            })

            underlineCheck = false;
            crosslineCheck = true;
        } else {
            $(".cross_line").css({
                backgroundColor: 'white',
            })
            $('.create_area').css({
                textDecoration: "none",
            })
            crosslineCheck = false;
        }
    })


    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    // TEXT ALIGN


    // Left
    let alignLeftCheck = true;
    $('.align_left').click(function () {
        if (alignLeftCheck == false) {
            $(".align_center").css({
                backgroundColor: 'white',
            })
            alignCenterCheck = false;
            $(".align_right").css({
                backgroundColor: 'white',
            })
            alignRightCheck = false;
            $(".align_left").css({
                backgroundColor: 'lightgray',
            })
            $('.create_area').css({
                textAlign: "left",
            })
            alignLeftCheck = true;
        } else {
            $(".align_left").css({
                backgroundColor: 'white',
            })

            alignLeftCheck = false;
        }
    })

    // CENTER
    let alignCenterCheck = false;
    $('.align_center').click(function () {
        if (alignCenterCheck == false) {
            $(".align_left").css({
                backgroundColor: 'white',
            })
            $(".align_right").css({
                backgroundColor: 'white',
            })
            alignRightCheck = false;

            alignLeftCheck = false;
            $(".align_center").css({
                backgroundColor: 'lightgray',
            })
            $('.create_area').css({
                textAlign: "center",
            })
            alignCenterCheck = true;
        } else {
            $(".align_center").css({
                backgroundColor: 'white',
            })

            $('.create_area').css({
                textAlign: "left",
            })



            alignCenterCheck = false;
        }
    })

    // RIGHT
    let alignRightCheck = false;
    $('.align_right').click(function () {
        if (alignRightCheck == false) {
            $(".align_left").css({
                backgroundColor: 'white',
            })

            alignLeftCheck = false;
            $(".align_center").css({
                backgroundColor: 'white',
            })

            alignCenterCheck = false;
            $(".align_right").css({
                backgroundColor: 'lightgray',
            })
            $('.create_area').css({
                textAlign: "right",
            })
            alignRightCheck = true;
        } else {
            $(".align_right").css({
                backgroundColor: 'white',
            })
            alignRightCheck = false;

            $('.create_area').css({
                textAlign: "left",
            })



        }
    })






    // TEXT ALIGN END
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////





    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////

    // EDIT SELECTOR




    // FONT SIZE
    let fontStyleCheck = false;
    $('.font_style').click(function () {
        $('.font_size').css({
            backgroundColor: 'white',
        })
        $('.font_size_selector').css({
            display: 'none',
        })
        fontSizeCheck = false;

        if (fontStyleCheck == false) {
            $(".font_style").css({
                backgroundColor: 'lightgray',
            })

            $(".fa-caret-right").css({
                transform: "rotate(90deg)",
            })
            $('.font_style_selector').css({
                display: "block",
            })

            fontStyleCheck = true;
        } else {
            $('.font_style_selector').css({
                display: "none",
            })
            $(".font_style").css({
                backgroundColor: 'white',
            })
            $(".fa-caret-right").css({
                transform: "rotate(0deg)",
            })

            fontStyleCheck = false;
        }
    })




    // ARIAL

    let arialCheck = false;
    $('.arial').click(function () {

        georgiaCheck = false;
        if (arialCheck == false) {

            $('.create_area').css({
                fontFamily: 'arial',
            })
            arialCheck = true;
        } else {

        }
    })


    // Georgia

    let georgiaCheck = false;
    $('.georgia').click(function () {
        arialCheck = false;
        if (georgiaCheck == false) {
            $('.create_area').css({
                fontFamily: 'georgia',
            })
            georgiaCheck = true;
        } else {
            georgiaCheck = false;
        }
    })


    // Impact

    let impactCheck = false;
    $('.impact').click(function () {
        impactCheck = false;
        if (impactCheck == false) {
            $('.create_area').css({
                fontFamily: 'impact',
            })
            impactCheck = true;
        } else {
            impactCheck = false;
        }
    })



    // Tahoma

    let tahomaCheck = false;
    $('.tahoma').click(function () {
        tahomaCheck = false;
        if (tahomaCheck == false) {
            $('.create_area').css({
                fontFamily: 'tahoma',
            })
            tahomaCheck = true;
        } else {
            tahomaCheck = false;
        }
    })


    // Times New Roman

    let timesNewRomanCheck = false;
    $('.times_new_roman').click(function () {
        timesNewRomanCheck = false;
        if (timesNewRomanCheck == false) {
            $('.create_area').css({
                fontFamily: 'cursive',
            })
            timesNewRomanCheck = true;
        } else {
            timesNewRomanCheck = false;
        }
    })



    // Verdana

    let verdanaCheck = false;
    $('.verdana').click(function () {
        verdanaCheck = false;
        if (verdanaCheck == false) {
            $('.create_area').css({
                fontFamily: 'verdana',
            })
            verdanaCheck = true;
        } else {
            verdanaCheck = false;
        }
    })







    // EDIT SELECTOR END


    ////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////






    ////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////

    // FONT SIZE


    let fontSizeCheck = false;
    $('.font_size').click(function () {
        $('.font_style_selector').css({
            display: "none",
        })
        $(".font_style").css({
            backgroundColor: 'white',
        })
        $(".fa-caret-right").css({
            transform: "rotate(0deg)",
        })

        fontStyleCheck = false;

        if (fontSizeCheck == false) {
            $('.font_size').css({
                backgroundColor: 'lightgray',
            })
            $('.font_size_selector').css({
                display: 'block',
            })
            fontSizeCheck = true;
        } else {
            $('.font_size').css({
                backgroundColor: 'white',
            })
            $('.font_size_selector').css({
                display: 'none',
            })
            fontSizeCheck = false;
        }
    })




    /// 12px

    let fs12Check = false;
    $('.fs12').click(function () {
        fs12Check = false;

        if (fs12Check == false) {
            $('.create_area').css({
                fontSize: '12px',
            })
            fs12Check = true;
        } else {
            fs12Check = false;
        }
    })



    /// 14px

    let fs14Check = false;
    $('.fs14').click(function () {
        fs14Check = false;

        if (fs14Check == false) {
            $('.create_area').css({
                fontSize: '14px',
            })
            fs14Check = true;
        } else {
            fs14Check = false;
        }
    })



    /// 16px

    let fs16Check = false;
    $('.fs16').click(function () {
        fs16Check = false;

        if (fs16Check == false) {
            $('.create_area').css({
                fontSize: '16px',
            })
            fs16Check = true;
        } else {
            fs16Check = false;
        }
    })



    /// 18px

    let fs18Check = false;
    $('.fs18').click(function () {
        fs18Check = false;

        if (fs18Check == false) {
            $('.create_area').css({
                fontSize: '18px',
            })
            fs18Check = true;
        } else {
            fs18Check = false;
        }
    })



    /// 20px

    let fs20Check = false;
    $('.fs20').click(function () {
        fs20Check = false;

        if (fs20Check == false) {
            $('.create_area').css({
                fontSize: '20px',
            })
            fs20Check = true;
        } else {
            fs20Check = false;
        }
    })



    /// 22px

    let fs22Check = false;
    $('.fs22').click(function () {
        fs22Check = false;

        if (fs22Check == false) {
            $('.create_area').css({
                fontSize: '22px',
            })
            fs22Check = true;
        } else {
            fs22Check = false;
        }
    })



    /// 25px

    let fs25Check = false;
    $('.fs25').click(function () {
        fs25Check = false;

        if (fs25Check == false) {
            $('.create_area').css({
                fontSize: '25px',
            })
            fs25Check = true;
        } else {
            fs25Check = false;
        }
    })




    /// 20px

    let fs30Check = false;
    $('.fs30').click(function () {
        fs30Check = false;

        if (fs30Check == false) {
            $('.create_area').css({
                fontSize: '30px',
            })
            fs30Check = true;
        } else {
            fs30Check = false;
        }
    })











    // FONT SIZE END

    ////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////





    ////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////

    // COLOR TEXT



    let colorTextCheck = false;
    $('.font_color').click(function () {
        $('.font_style_selector').css({
            display: "none",
        })
        $(".font_style").css({
            backgroundColor: 'white',
        })
        $(".fa-caret-right").css({
            transform: "rotate(0deg)",
        })

        fontStyleCheck = false;




        $('.font_size').css({
            backgroundColor: 'white',
        })
        $('.font_size_selector').css({
            display: 'none',
        })
        fontSizeCheck = false;





        if (colorTextCheck == false) {
            $('.font_color').css({
                backgroundColor: 'lightgray',
            })
            $('.text_color_selector').css({
                display: 'flex',
            })
            colorTextCheck = true;
        } else {
            $('.font_color').css({
                backgroundColor: 'white',
            })

            colorTextCheck = false;
        }
    })

    $('.text_color_close').click(function () {
        $('.text_color_selector').css({
            display: "none",
        })

        $('.font_color').css({
            backgroundColor: 'white',
        })

        colorTextCheck = false;
    })




    //////////////////////////////////////////////////////////

    $('.text_color_selector_colors_item:nth-child(1)').click(function () {
        $('.create_area').css({
            color: 'rgb(156, 51, 51)',
        })
    })
    $('.text_color_selector_colors_item:nth-child(2)').click(function () {
        $('.create_area').css({
            color: "rgb(32, 240, 13)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(3)').click(function () {
        $('.create_area').css({
            color: "rgb(148, 45, 148)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(4)').click(function () {
        $('.create_area').css({
            color: "rgb(187, 88, 31)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(5)').click(function () {
        $('.create_area').css({
            color: "rgb(179, 125, 89)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(6)').click(function () {
        $('.create_area').css({
            color: "rgb(189, 151, 28)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(7)').click(function () {
        $('.create_area').css({
            color: "rgb(126, 226, 44)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(8)').click(function () {
        $('.create_area').css({
            color: "rgb(224, 106, 106)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(9)').click(function () {
        $('.create_area').css({
            color: "rgb(22, 211, 170)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(10)').click(function () {
        $('.create_area').css({
            color: "rgb(84, 179, 235)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(11)').click(function () {
        $('.create_area').css({
            color: "rgb(23, 31, 54)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(12)').click(function () {
        $('.create_area').css({
            color: "rgb(226, 51, 151)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(13)').click(function () {
        $('.create_area').css({
            color: "rgb(156, 151, 251)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(14)').click(function () {
        $('.create_area').css({
            color: "rgb(136, 151, 51)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(15)').click(function () {
        $('.create_area').css({
            color: "rgb(196, 51, 51)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(16)').click(function () {
        $('.create_area').css({
            color: "rgb(176, 51, 151)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(17)').click(function () {
        $('.create_area').css({
            color: "rgb(176, 51, 151)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(18)').click(function () {
        $('.create_area').css({
            color: "rgb(156, 91, 121)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(19)').click(function () {
        $('.create_area').css({
            color: "rgb(156, 101, 51)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(20)').click(function () {
        $('.create_area').css({
            color: "rgb(56, 151, 251)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(21)').click(function () {
        $('.create_area').css({
            color: "rgb(156, 251, 151)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(22)').click(function () {
        $('.create_area').css({
            color: "rgb(255, 151, 51)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(23)').click(function () {
        $('.create_area').css({
            color: "rgb(255, 255, 255)"
        })
    })
    $('.text_color_selector_colors_item:nth-child(24)').click(function () {
        $('.create_area').css({
            color: "rgb(0, 0, 0)"
        })
    })



    //////////////////////////////////////////////////////////




    // COLOR TEXT END



    ////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////
    /////////////////////////////////




    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////

    // BACKGROUND COLOR

    let bgEditerCheck = false;
    $('.bg_editer').click(function () {
        $('.font_style_selector').css({
            display: "none",
        })
        $(".font_style").css({
            backgroundColor: 'white',
        })
        $(".fa-caret-right").css({
            transform: "rotate(0deg)",
        })

        fontStyleCheck = false;




        $('.font_size').css({
            backgroundColor: 'white',
        })
        $('.font_size_selector').css({
            display: 'none',
        })
        fontSizeCheck = false;





        if (bgEditerCheck == false) {
            $('.bg_editer').css({
                backgroundColor: 'lightgray',
            })
            $('.background_seclector').css({
                display: 'flex',
            })
            bgEditerCheck = true;
        } else {
            $('.bg_editer').css({
                backgroundColor: 'white',
            })

            bgEditerCheck = false;
        }
    })

    $('.background_seclector_close').click(function () {
        $('.background_seclector').css({
            display: "none",
        })

        $('.bg_editer').css({
            backgroundColor: 'white',
        })

        bgEditerCheck = false;
    })


    // COLORS
    $('.background_color_block:nth-child(1)').click(function () {
        $('.background_color_block:nth-child(1)').addClass('active');
        $('.background_color_block:nth-child(2)').removeClass('active');
        $('.background_color_block:nth-child(3)').removeClass('active');


        $('.background_color_selector').css({
            display: 'flex',
        })
        $('.background_images_selector').css({
            display: 'none',
        })
        $('.background_image_files').css({
            display: 'none',
        })
    })

    // IMAGES
    $('.background_color_block:nth-child(2)').click(function () {
        $('.background_color_block:nth-child(2)').addClass('active');
        $('.background_color_block:nth-child(1)').removeClass('active');
        $('.background_color_block:nth-child(3)').removeClass('active');


        $('.background_color_selector').css({
            display: 'none',
        })
        $('.background_images_selector').css({
            display: 'flex',
        })
        $('.background_image_files').css({
            display: 'none',
        })
    })

    // FILES
    $('.background_color_block:nth-child(3)').click(function () {
        $('.background_color_block:nth-child(3)').addClass('active');
        $('.background_color_block:nth-child(1)').removeClass('active');
        $('.background_color_block:nth-child(2)').removeClass('active');


        $('.background_color_selector').css({
            display: 'none',
        })
        $('.background_images_selector').css({
            display: 'none',
        })
        $('.background_image_files').css({
            display: 'flex',
        })
    })



    // //////////////////////////////////

    $('.background_color_selector_colors_item:nth-child(1)').click(function () {
        $('.create_area').css({
            backgroundColor: 'rgb(156, 51, 51)',
        })
    })
    $('.background_color_selector_colors_item:nth-child(2)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(32, 240, 13)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(3)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(148, 45, 148)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(4)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(187, 88, 31)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(5)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(179, 125, 89)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(6)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(189, 151, 28)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(7)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(126, 226, 44)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(8)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(224, 106, 106)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(9)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(22, 211, 170)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(10)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(84, 179, 235)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(11)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(23, 31, 54)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(12)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(226, 51, 151)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(13)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(156, 151, 251)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(14)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(136, 151, 51)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(15)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(196, 51, 51)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(16)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(176, 51, 151)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(17)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(176, 51, 151)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(18)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(156, 91, 121)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(19)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(156, 101, 51)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(20)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(56, 151, 251)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(21)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(156, 251, 151)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(22)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(255, 151, 51)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(23)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(255, 255, 255)"
        })
    })
    $('.background_color_selector_colors_item:nth-child(24)').click(function () {
        $('.create_area').css({
            backgroundColor: "rgb(0, 0, 0)"
        })
    })


    // //////////////////////////////////



    // ////////////////////////////////////
    // IMAGES

    $('.background_images_selector_item:nth-child(1)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/1.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(2)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/2.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(3)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/3.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(4)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/4.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(5)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/5.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(6)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/6.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(7)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/7.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(8)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/8.jpg)",
        })
    })
    $('.background_images_selector_item:nth-child(9)').click(function () {
        $('.create_area').css({
            backgroundImage: "url(images/9.jpg)",
        })
    })


    // ////////////////////////////////////


    document.querySelector('#file').addEventListener('change', function (event) {
        // console.log(event.target.files[0])
        let myFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(myFile)
        reader.onload = function () {
            // console.log(reader.result);
            // document.body.style.backgroundImage = `url(${reader.result})`
            $('.create_area').css({
                backgroundImage: `url(${reader.result})`,
            })
        }
    })



    // BACKGROUND COLOR END

    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////







    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////

    ///// SIGN IN



    let signInCheck = false;
    $('.sign_in').click(function () {
        $('.font_style_selector').css({
            display: "none",
        })
        $(".font_style").css({
            backgroundColor: 'white',
        })
        $(".fa-caret-right").css({
            transform: "rotate(0deg)",
        })

        fontStyleCheck = false;




        $('.font_size').css({
            backgroundColor: 'white',
        })
        $('.font_size_selector').css({
            display: 'none',
        })
        fontSizeCheck = false;





        if (signInCheck == false) {
            $('.sign_in').css({
                backgroundColor: 'lightgray',
            })
            $('.sign_in_form').css({
                display: 'flex',
            })
            signInCheck = true;
        } else {
            $('.sign_in').css({
                backgroundColor: 'white',
            })

            signInCheck = false;
        }
    })

    $('.fa-lock-open').css("display", "none");

    let regExp = /^[a-zA-Z]{1,20}$/;
    let pass = /^[a-zA-Z0-9]{2,15}$/;
    let loginTest = false;
    let passTest = false;
    $('.sign_in_button').click(function () {




        if (regExp.test($('#login').val())) {
            console.log('Gj');
            // $('.checker_text').css({
            //     visibility: "hidden",
            // })
            loginTest = true;
        } else {
            $('.checker_text').css({
                visibility: "visible",
            })
        }


        if (pass.test($('#password').val())) {

            // $('.checker_text').css({
            //     visibility: "hidden",
            // })
            passTest = true;
        } else {
            $('.checker_text').css({
                visibility: "visible",
            })
        }

        if (passTest == true && loginTest == true) {
            $('.sign_in_form').css({
                display: 'none',
            })
            $('.checker_text').css({
                visibility: "hidden",
            })
            signInCheck = false;

            $('.fa-lock-open').css("display", "block");
            $('.fa-lock').css("display", "none");

            $('.sign_in').css({
                backgroundColor: 'white',
            })

        } else {
            $('.fa-lock-open').css("display", "none");
            $('.fa-lock').css("display", "block");
            $('.checker_text').css({
                visibility: "visilble",
            })



            $('.sign_in').css({
                backgroundColor: 'white',
            })
        }


    })


    // if( regExp.test(form.first_name.value) ){

    //     form.first_name.style.border = '2px solid lime';
    //     getSel('.fn_alert').style.display = 'none';
    // }else{
    //     form.first_name.style.border = '2px solid red';
    //     getSel('.fn_alert').style.display = 'block';
    // }

    ///// SIGN IN END



    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////





    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////
    // ///////////////////////////////


    // TABLE CREATER



    
    $('.editer_selector_icon:nth-child(2)').click(function () {

        $('.editer_selector_icon:nth-child(2)').css({
            backgroundColor: "lightgray"
        });


        $('.table_creater').css({
            display: "flex",
        })
    })

    $('.table_creater_item_close').click(function () {
        $('.table_creater').hide();
        $('.editer_selector_icon:nth-child(2)').css({
            backgroundColor: "white"
        });
    })



    ///////////////////////////////////////////////////
    // CREATE BTN

    let area = document.querySelector('.create_area');
    let testValue = /^[0-9]{1,10}$/;

    $('.create_table_btn').click(function () {

        let countOfTr = $('#tr').val();
        let countOfTd = $('#td').val();
        let widthOfTd = $('#width_tr').val();
        let heightOfTd = $('#height_tr').val();
        let widthOfBd = $('#width_border_table').val();
        let styleOfBd = $('#border_style').val();
        let colorOfBd = $('#brd_color').val();

        let countTest = 0;

        if (testValue.test($('#tr').val())) {
            countTest++
            $('#tr').css({
                border: "1px solid black",
            })
        } else {
            $('#tr').css({
                border: "1px solid red",
            })
            $('.table_warning').css({
                visibility: 'visible'
            })
        }


        if (testValue.test($('#td').val())) {
            countTest++
            $('#td').css({
                border: "1px solid black",
            })
        } else {
            $('#td').css({
                border: "1px solid red",
            })
            $('.table_warning').css({
                visibility: 'visible'
            })
        }


        if (testValue.test($('#width_tr').val())) {
            countTest++
            $('#width_tr').css({
                border: "1px solid black",
            })
        } else {
            $('#width_tr').css({
                border: "1px solid red",
            })
            $('.table_warning').css({
                visibility: 'visible'
            })
        }


        if (testValue.test($('#height_tr').val())) {
            countTest++
            $('#height_tr').css({
                border: "1px solid black",
            })
        } else {
            $('#height_tr').css({
                border: "1px solid red",
            })
            $('.table_warning').css({
                visibility: 'visible'
            })
        }


        if (testValue.test($('#width_border_table').val())) {
            countTest++
            $('#width_border_table').css({
                border: "1px solid black",
            })
        } else {
            $('#width_border_table').css({
                border: "1px solid red",
            })
            $('.table_warning').css({
                visibility: 'visible'
            })
        }


        if ($('#border_style').val() != null) {
            countTest++
            $('#border_style').css({
                border: "1px solid black",
            })
        } else {
            $('#border_style').css({
                border: "1px solid red",
            })
            $('.table_warning').css({
                visibility: 'visible'
            })
        }

        if ($('#brd_color').val() != null) {
            countTest++
            $('#brd_color').css({
                border: "1px solid black",
            })
        } else {
            $('#brd_color').css({
                border: "1px solid red",
            })
            $('.table_warning').css({
                visibility: 'visible'
            })
        }





        ///////////////////////////

        if (countTest == 7) {
            createTable(area, countOfTd, countOfTr, widthOfBd, widthOfTd, heightOfTd, styleOfBd, colorOfBd);
            $('.table_warning').css({
                visibility: 'hidden',
            })
        }




    })



    function createTable(parent, cols, rows, borderWidth, widthOfTd, heightOfTd, styleOfBd, colorOfBd) {
        console.log('work');
        let table = document.createElement('table');

        for (let i = 1; i <= rows; i++) {
            let tr = document.createElement('tr');
            for (let a = 1; a <= cols; a++) {
                let td = document.createElement('td');
                tr.appendChild(td).setAttribute('style', "border:" + borderWidth + 'px' + " " + styleOfBd + " " + colorOfBd + ';' + "width:" + widthOfTd + "px" + ';' + 'height:' + heightOfTd + "px");
            }

            table.appendChild(tr);
        }
        parent.appendChild(table);
        getSel('textarea').value = getSel('.create_area').innerHTML;

    }

    ///////////////////////////////////////////////////



    ///////////////////////////////////////////////////
    // RESET BTN

    $('.reset_table_btn').click(function () {
        $('#tr').val('');
        $('#td').val('');
        $('#width_tr').val('');
        $('#height_tr').val('');
        $('#width_border_table').val('');
        $('#border_style').val('');
        $('#brd_color').val('');

    })



    // document.querySelector('.create_area').innerHTML;
    // document.querySelector('.create_area').innerHTML;




    ///////////////////////////////////////////////////


    // TABLE CREATER END

    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////



    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////

    /// OL CREATER


    $('.editer_selector_icon:nth-child(3)').click(function () {

        $('.editer_selector_icon:nth-child(3)').css({
            backgroundColor: "lightgray"
        });


        $('.ordered_list').css({
            display: "flex",
        })
    })

    $('.ordered_list_item_close').click(function () {
        $('.ordered_list').hide();
        $('.editer_selector_icon:nth-child(3)').css({
            backgroundColor: "white"
        });
    })



    /////////////////////////////////////////////////////////////

    $('.ol_btn_reset').click(function() {
        $('#ol_input').val('');
        $('#ol_select').val('');


    })


    $('.ol_btn_create').click(function() {
        
        let a = 0;
        if(testValue.test($('#ol_input').val())) {

            $('.ol_item_warning').css({
                visibility: 'hidden',
            })
            $('#ol_input').css({
                borderColor: "black",
            })
            a++
        } else {
            $('.ol_item_warning').css({
                visibility: 'visible',
            })
            $('#ol_input').css({
                borderColor: "red",
            })
        }


        if($('#ol_select').val() != null) {

            $('.ol_item_warning').css({
                visibility: 'hidden',
            })
            $('#ol_select').css({
                borderColor: "black",
            })
            a++
        } else {
            $('.ol_item_warning').css({
                visibility: 'visible',
            })
            $('#ol_select').css({
                borderColor: "red",
            })
        }

        if(a == 2) {
            let countOfOlLi = $('#ol_input').val();
            createOL(countOfOlLi);
        }

    })


    console.log($('#ol_select').val());

    function createOL(count) {
        let ul = document.createElement('ul');
        for(let i = 1; i <= count; i++) {
            let li = document.createElement('li');
            li.innerText = 'List Item';
    
            
            ul.appendChild(li).setAttribute('type', getSel('#ol_select').value);
        }
        area.appendChild(ul);
        getSel('textarea').value = getSel('.create_area').innerHTML;
    }


    /// OL CREATER END


    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////



    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////
    ///////////////////////////////////////

    // UL CREATER


    $('.editer_selector_icon:nth-child(4)').click(function () {

        $('.editer_selector_icon:nth-child(4)').css({
            backgroundColor: "lightgray"
        });


        $('.unordered_list').css({
            display: "flex",
        })
    })

    $('.unordered_list_item_close').click(function () {
        $('.unordered_list').hide();
        $('.editer_selector_icon:nth-child(4)').css({
            backgroundColor: "white"
        });
    })


    ///////////////////////////////////////////////



    $('.ul_btn_reset').click(function() {
        $('#ul_input').val('');
        $('#ul_select').val('');


    })


    $('.ul_btn_create').click(function() {
        
        let a = 0;
        if(testValue.test($('#ul_input').val())) {

            $('.ul_item_warning').css({
                visibility: 'hidden',
            })
            $('#ul_input').css({
                borderColor: "black",
            })
            a++
        } else {
            $('.ul_item_warning').css({
                visibility: 'visible',
            })
            $('#ul_input').css({
                borderColor: "red",
            })
        }


        if($('#ul_select').val() != null) {

            $('.ul_item_warning').css({
                visibility: 'hidden',
            })
            $('#ul_select').css({
                borderColor: "black",
            })
            a++
        } else {
            $('.ul_item_warning').css({
                visibility: 'visible',
            })
            $('#ul_select').css({
                borderColor: "red",
            })
        }

        if(a == 2) {
            let countOfOlLi = $('#ul_input').val();
            createList(countOfOlLi);
        }

    })


    function createList(count) {
        let ul = document.createElement('ul');
        for(let i = 1; i <= count; i++) {
            let li = document.createElement('li');
            li.innerText = 'List Item';
    
            
            ul.appendChild(li).setAttribute('type', getSel('#ul_select').value);
        }
        area.appendChild(ul);
        getSel('textarea').value = getSel('.create_area').innerHTML;
    }

    // UL CREATER END
    
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////
    /////////////////////////////////////////////////

    //// EDITER

    $('.editer').click(function(){
        $('.main').hide();
        $('.create_area').hide();
        
        getSel("textarea").value = getSel('.create_area').innerHTML ;
        $('.editer_selector_block').css({
            display: "flex",
        })
        $('.edition_section').css({
            display: "flex",
        })
    })

    // console.log(getSel('.create_area').innerHTML);
    getSel('textarea').value = getSel('.create_area').innerHTML;


    //// EDITER END


    $('.editer_selector_icon:nth-child(1)').click(function(){
        $('.main').css({
            display: "flex",
        })
        $('.create_area').show();

        $('.editer_selector_block,.edition_section').hide();
        getSel('.create_area').innerHTML = getSel('textarea').value;
       
    })



   
    $(document).mouseup(function (e) {
        var container = $(".sign_in_item");
        if (container.has(e.target).length === 0){
            $('.sign_in_form').hide();
            
            signInCheck = false;
            $('.sign_in').css({
                backgroundColor: 'white',
            })
        }
    });


})





