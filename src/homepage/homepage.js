import React from 'react';

const Home = () => {
    return (
        <>
        <div className="container-fluid Hero">
            <div className="row">
                <div className="col-md-6"> 
                <h1>Welcome to Classic Store</h1>
                <h2>Book a safe storage on a button click</h2>
                <div className='buttons'>
                    <button>Personal Booking</button>
                    <button>Business Booking</button>
                </div>
                </div>
                <div className="col-md-6"> 
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRUYGBgZGRwaGBgaGR4aGBwaGBwcIRwaGBkcIS4lHB8rIR8ZJzgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQkISE0MTQ0NDQ0NDE0NDQ0MTE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NP/AABEIAPkAywMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABEEAACAQICBgYGCAQFBAMAAAABAgADEQQhBRIxQVFxBiIyYYGRBxNyobHwI0JSYoKSwdEUstLhFTNDovEWRGRzJFNU/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB0RAQEBAAIDAQEAAAAAAAAAAAABEQJBEiExYVH/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREjzpbDh2Q16QdLB1LqGW4uNZb3GRBz4wJCRnSHEPTwuIqU7B0o1HQkXGuqMVuN+YEyF0jROyrTPJ1/eY2mKqNh6y66HWpOO0N6kQOSUPSpjk7aUHHejKfNWt7pJ4X0xH/VwfjTqX9zKPjOXh7qp4gS2R8/N5Vx2zC+lzAt21rIeBQN/KxkvhvSLo5/+5C+0jL8ROAYVE1mLhzsA1HVdvHWRryUTR9HW1G176pa+uu4gfYy2xiPoPCdIsJU7GJotyqLfyvJJKgOYIPI3nzidEYfi/50/olyngaa9irXT2aqj4JGI+jYnCcJpWtTtqY3FAd9RXHk6kTYMB04rJbXqtUH3lpg5d6KsYrq0TQh6RUAzoknucD9DLFb0mqNmGYn/wBg/pjE10OJzc+lNf8A8dT84/plS+lJd+Eq/mH9MYro8Tn9P0lof+2qD8Q/aZKekKmf9BxzI/bnGJrd4mm/9eU//qa3tD9pN6A02uKRnRWUK2r1rZkbbW+c5FS8REBERAREQE17TnRDC4m7MmpU2itT6lS/EsO143mwxA5TjtC43Ak1CoxdFfrINWuB3oLhzy85ewnSLD10YK+o+o16bgpU7OdlbtfhvOnyD070Ww2LB9bTGtudbBweN9/jeSzV189VMKAAAdgG2YzKRtkilZSSmsFIJXVqG63UkdWptXZ9bLvntbCgGxujfZa1iOKvsYd8urYiUObeHwMn3brgXOYBtu7aZ3kNiaWoxvcX4iTBvrjtW1b/AHe2m3v4eM1GKyweUrDfPhLSytRKLgb9J7rQqSoU4wU608LSv1c8KRgth5dRpRqypUkxNZCGX0v3+75/4mIl5kI44e754fCMXXuJbq2OwkA7N9/7TpPo9pFcGrHa7FjzsFOe/NTOX49uqAN9wLWGdurY852To1R1MLRH3A35ut+sipWIiQIiICIiAmsdLdPV8JqutAPQsfWVcyabX6pZBnqcW3TZ5bdAQQQCCLEHMEHaCIGlYbpjUa1lpkHMEaxuOIOtnJJdP1T9VPI/1TW9O9GHwRbEYRC+HJLVcOM2p32vQ4rvKeXddwWkUqIHpsGU7CL7RtByyI4GZuxr045pI2rVbj/VqbPbaU4fGug1QQyb0YayHw3HvWx75VpZh66rY3+kc+bEmYJM3kTyrMxOJR7aoZSL3UnWQX+wTn4G/MyQTSFMsvWz1CNu/XQ2tbM5HyPGQaNdvCWMTT1Wt4+c1xSt3FUcD5GXFqfdPu/eadgse6CytlwOYkvh9Or9dSO8Zj9/dGpifWp93zPdPVc/ZG7f/aYlDFo5AVgTuUdrIcNsykUnYrHkpPwEqV7rn7u7iZ4XPEeR/eXkwdU7KT/kP6w2jqm9QvtOi/FpUYxY8fdAJ4n3ftMpdHMfrp4PrHyUGGwQXtVFH4H/AFUCQWFPefPlKhzPmYdUGx2Psop+LiABuFQ+CJ/VwjYuLb07sOa7+DXnaMK7KUQMuqqKNW2eQAnI9HUXqVVpoj67Gw1qwAGYBvqpe2Y2Tc6fQ7FHtPQHG7Vah95USbDK3iri1XtMo/EP1mK2m6A21F8GU/AzXKfQqp9bEoPYoD4s5mUnQtfrYmufZ1E/lSZ9L7Z+M6WYSkpepWCqLAnVY5nZ2QZKYfECoi1EzV1DKdl1YXBsRcZcZrtboJhXXVq+uqLvD1XIy7gRNgwGDWjTSkl9VFCrcknVXIC522GUeulZcREgTAraUoIxV61NWW2spdQwuARcXuMiD4zPml9NujuvfFUEvVUWqoozrUx8XXMqd4uu8WCe/wCosLe3r0J7jf4TROkmi6K61fR1QU3b/MoAMKdX7wFrK/fv87wmBVXIZSCDmCNhBmy0kGrnM2tZjiGPR0dtcG5Y358DwMxfWzaulFdf4qqj5pcWNrkdUbvrLfd4ix267jMEU6y5rtBGeXEHevfu2GxnSVm/inCm7eEksXg9dkO7V63Iauw8Tf5tIzAdrwP6ScDdj2Tv9ndv/Txl7S/GW+HRu0qm2zqy2cBTP1B8JeD/AKQKkCihhhTqJUpgKyE8cwyMvnnJb/Fqv2v9z/DXtIzXnoaMGc+OdtpX8iH3splBxT7nYezZP5bTGER4mrz1WbtMze0xPxMqp2GwDy+eEtCVCMNZtN/nLumSj/Ocjla0urWyJ4TDTZOgNLXxoO5QW8wwPeOsqzrk5f6Jk1qlZ9uqoA/GQfDNWnUIQiIgIiICIiAiJpPT7TuNwppth0p+qcFWqOrOy1L9VSA6gAjYTfMW3i4RPS/RP8JUOJpr/wDHqNeoBspVGPb7kc7eDH72UBW0+ig/SKOG0/ASP0p0jx2JRqVWv9G2TIlNFUi4NiSC1suM1nSWFdMs9W2XLh4X+c5PGVdqM0xi9eqza17nba3xlnD40pkc1OZHA8VO4/Hf3Y1YZy3OkjGpelQXWDqeqcrcDy+qe7yymUW2cju7uO6ROjWOtbcRn4SSZxfkCPdHa1Jj9t/d88p6qykOBv4cBugYgc9krK8q/PjLipMYYg8PMj9Lx688R5H43lGYFi0w/WHex87fD5znhIO3Pnn8ZRlGoo3j3cJ560bgfK3xtMcNPQ0YMj1x3L5m3wvPK1Q6p2bOBvn335S0GnlTZGGug+jXHChTfWUsHYda+YC3sLHbkeM6RhtI037LeByPvmh9EsMv8Mnfc++36Sfp4a3ZvF4Sp5VtE9mpV9LGhkzID9lmCk+F8z4TExvT+nQpmrVo1WQEAsi22mw7ZAPO853jjU5a3iJi4HFLVppVW4V1V1va9nAIvYkXsdxMyploiIgJhaUwCV6T0agurrqniODKdzA2IO4gTNiBwato1qVd6FQddG1WNrBhtV1+6wse65G4yRxGjkdCjZcG3g7iJt3pJ0KXpjF0hepRU64AzajtPMqbsO4sN85a2nSRw5zNla1rGmcC1NyCNhtls7iO4/23SNtJfFaQ13IbNWyvw778OPgd0iq9LVNvIzpGKyNHdscjGLurnvN5To49ccj8JmY2lrFSOJB5S9jJoMGF7WO8fO6VkS0Et2d3n5yvXvtyPkD/AE/DlEv9SxUDLivLBO4ytEY7FPw95mkXQYLzMw+ha7i4QhftEEDzay++Zi9HwovVrIo3563nqAgfmjRDipLiv48s5Keqwab3qHuAVfBut8RH+LU1/wAvDIO97u3vJEaYwqas3ZUnkP2memi6pzKFRtu5CL+Zspjvpus21yo4JZBu+znLCoalREuSXYJcm5uxy2njJauOi6Ip471aU6SoiqLBlps7G+/Xe1MyYp9HMVUt66s5G8NU1B406Q1T+abqigAAbALDwlUzeVMazg+iFNNreCIqDxJ1m8iJJU9A4cbaSt3vep/OTbwkpEztXIs4egtNVREVFUWVVAVQBsCqMgO4S/EQpERAREQPCJ87+kPo1/BYptVfoat3pG2Si/Wp/hJFvusvfPoma5016PDG4V6WQqL16THdUUGwP3WBKnubugfMmIhH1hqndsPL9vhlwlWOpsjMrAqykhlO1WU2KnvBBHhMQzaMrAi1QA9/wMzapz8TMbBnWYNvF7+IOfI+485eqnrHmY7GZ87b7u6eW+chuld/1yvf6u2y5fOewzw5d23gPqjcM/384GdorEImuXTX7Ope9ha+tlcE7Vyv8ZnHTrj/AC0VPYAG/ioDf7pAvUAvc7zu7xxz/X3yk4ocPPmePhulZSlbSVR82c+eYy+12vfMd2ubk58Tt38bmYBxRO+3yOPL3yg1L/PP9zLgz2qLxvyz2f8AEpNbgPM/p5TDDS4GgXjVbly/v85T3B4t6dVaiW1qZDrcXGsjArcbxfdLGtJLQWF12b5+d0YOmdHPSrSeyYxPUts9YgLUieLLmyZ+0BvInRcLiUqIr03V1YXVlYMpHEEZGfPuL0G2ZCy1o3EYzBPr4eoyXN2UZo2ztoeq2WV9o3ETneNjWx9HxOadHvSpTeyY1PVNs9YgLUifvLmyf7hxInRMLiUqIr03V1YXVlYMpHEEZGRV+IiAiIgIiICIiBxL00dGNRxjaa9WoQtUD6tS3VfuDAW9pRvackM+utL6OTEUXoVRdKilW457COBBsQdxAny10i0Q+ExFTD1B1ka17WDLtVx3MLHxI3SxKwsAfpF8fgZkV6lnYd+W2Y2B7a8z8DL+kF6wPhLPp0yXxJ5DP3gDdYfI4Z2WrH4+8AHIcpUyZXHj+8x2MsSq9aLyyXlOtNIyNeUtUljWgmDF0VDLiYiYs9AhcSC1ZufQUKxbLMD4n+wmiUaTN2VLd+7dv2e+bh0UoV6La/q73tYMdUd26527gecSpY6MMLfK3yO/wMi9NYBEH0jol9gJGseS7T4AyRw2jdI4ja3qEP2Qae85FmvUPdawzk3ovoRQpnWcmox2k5X5sbsT3giLyhONcsXoy9dvo0YA7GYat+OqubN5Tb+i3QvG4SvSqUqoFC969NmKFwRYMq2YEjI9bVPVtvnSaGGVBZFC8bDbzO885fnO1qa9iIkUiIgIiICIiAnNPTH0X9fh/wCLpr9JQHXttajtJ79Q3bkWnS5Q6gggi4ORB3wPkPBraovP9DMzE9rkTNj6cdFzgscFUfQuS9E8FPaTmpNvZKma5iu0eZln1L8V3t5nPlbjtmPiaVsxs3jh/aZLjtc2vx2jbtPmY48P3YjPh4mURbGeTJq4Y36oJB2b7d3KZ2j9AVqvZU23naB7R7IHNprREAS9Rw7N2VJ+Ay3nYPObZT0DhqA1sRXQHaEX6Rz3AZL5a08rdKKFPLDYcFhsqVuuRwKpbVHksMo7R3RSvVGtq2T7RsE8XYhb8iZJf4VgcP8A51b1jj6lIa+fe7DVXwU85CaQ0/iK5vVqsw+yDZQOFhu53mErSjZK/SVUyw1BKf32+kqfmbZ4WlOgummKwdc1tYVVbJ1cXBXgpAuh25r4g2Amvk3tKiJnkvF9J9Fel+Hxya1F7OBd6TWDr32+sv3hlyOU2OfI9Co9J1qUWZHU3VlNiDxBGydi6EelVKmrRxxCPsFfIU2/9gGSH7w6vs7Jhp1aJQjAgEG4OYI3yuAiIgIiICIiAiIgIiIGpekbRKV8FUZh1qANam28MgNxyIuDzB3T55xPabmZ9N9LFvgcUP8Ax6v8jT5kr3DMbZFiBzEvH6l+LzDbwubcO0uzYPyg8uFp6yg7dn9RPDLdsAHdxxXqMdp258/3lozSakcBpMI6uUDhQbKwuCdQgXGeV7d3dLmP6S4mrkX1FGxU6oHK2zwtIgzyMNek3N9537/GeXiJUehpdVpZgGFxkqcxJFcNlIim9iDNioMGQSciI16dpj1KN+48d8l/4VmbVVSSdgAuTyAzM2TQHQSvXNyCF3ncON27II4XJ+7MyKxegvTjE4N1ov8ASUGNgrGwUn7D/U5dnuFyZ9AYSuKiK42ML7QbcRcEi4OWR3TRcP6LcKQhrM7FGDaqnVUj7LZXIvw1dmyb7SpKihVAVQAABkABsAEKuxESBERAREQEREBERAwtLYU1aFWkDY1KboCdgLKVufOfM9bDlWqI4sy1GR13qymxHMEe6fUs5n6VujYZRjKS9ZBq1gBtQnKpYb1JNzwN/qyDh9ZCCQdo2/vLJkpjKN+sNo94kcyTcus2Yt2nhlerKbSo8iLSoJAoE9tJPR+hatU2VD3kjYLbW2BebETovRv0ZM1mqbNtz1V8GIu34VAP24HNcDoupVYKiMSdlgbnvA2n4d86J0X6AVnALEhTncEBfB7EflD99p1LRPRahQWwUMdpuLLfjq562eYLFiOMn5LWsaxobobh6AzUMd4tZT7QJJf8RI4ATZUQAAAWAyAG6VRM6r2IiAiIgIiICIiAiIgIiICWqtNWUqwBVgQQcwQRYgjeLS7ED546Y9H2weIalmUbr0mOd6ZOwneynqnwO8TUcVRscth+M+junXR4YzDFVA9bTu9I/etmpPBhlz1TunAqtC91III2gixBG4g7CIlyl9oQz0JsHH9eA2mbCnRxmCFWDO+xFzbMZG23Phq7pv3Rr0ZMbPWAQcD2j+Hb+Yi32ZrWccz0doOrVPVXK4vssLnYSeqvI5906R0b9GTGzVBqji1x/tyY8uoOc6bovQVCgBqILj6zWLeGVl5KAJLSauIbRfR6hQACoCRmCQLA8VUDVU94F+JMmYiRSIiAiIgIiICIiAiIgIiICIiAiIgIiICaviuhGEqVa1V0JasLEXyViLGogtkxOdzfPPeZtEQIPo50bo4NNWmLsbaztbWNt2Wwd0nIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgf/Z"></img>
                </div>

            </div>
        </div>
        <div className="container-fluid about">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
                </div>
                <div className="col-md-6">
                    <h1>Cut the struggle of finding a secure storage during transition</h1>
                    <p>Ever got stuck with your goods or luggage due to the lack of a reliable storage company?</p>
                    <p>Were are here for you</p>
                    <p>We are reputable as one of the safest and convinient storage companies</p>
                </div>
            </div>
        </div>
        <div className="container-fluid testimonial">
            <h1>What our Esteemed Clients are Saying</h1>
        </div>
        <footer>
            <div className="social-icons">

            </div>
            <div>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
            <p>@2020 Classic Store</p>
        </footer>
        </>
    );
}

export default Home;
