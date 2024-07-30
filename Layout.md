thay đổi 1 block bằng position relative sẽ ko làm thay đổi vị trí của các block khác
thay đổi 1 block bằng position absolute thì nó sẽ tìm thẻ cha gần nhất có (relative, absolute, sticky, fixed) để có vị trí tương đối theo thẻ cha đó. Lưu ý là thẻ có absolute sẽ ko quan tâm thẻ cha có padding bao nhiêu mà sẽ tính từ rìa ngoài cùng của thẻ cha để đo kích thước
position fixed sẽ loại bỏ vị trí thông thường của trang và ăn theo root-element của trang
position sticky sẽ chỉ có tác dụng trong 1 container chứa nó, khi đi ra khỏi container chứa nó sẽ ko còn fixed nữa

useMutation nhận vào object đầu tiên là mutationFn
onSuccess và onError
onSuccess để biết khi đã đăng ký xong thì sẽ phải làm gì

khi mutation.mutation nó sẽ chạy vào hàm mutationFn

    trong content là array với các object

questions
check nếu options là rỗng thì show alert hết suất chiếu,
tabra vào lại là lại callapi trong homepage
đưa mũi tên swiper ra ngoài
dùng component loading
ko làm được useRef chọn ghế
reset rạp phim phải reset ghế đã đặt
làm sao cập nhật ghế đã đặt

tạo 1 mảng state chứa các ghế
click vào 1 ghế, cho ghế đó vào mảng và active
click ghế khác, check mảng, chưa có thì thêm vào và active

nếu seatId tồn tại trong mảng thì active
ko tồn tại thì remove active
